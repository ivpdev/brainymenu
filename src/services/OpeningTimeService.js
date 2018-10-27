const daysOfWeek = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday'
}

const ceilToMinutes = (date) => {
    date.setSeconds(0)
    date.setMilliseconds(0)
}

const dateWithGivenTime = (date, timeStr) => {
    const timeArr = timeStr.split(":") //TODO validate
    const hours = timeArr[0]
    const minutes = timeArr[1]

    const result = new Date(date)
    result.setHours(hours)
    result.setMinutes(minutes)

    return result
}

const timeOfDateIsLaterOrEqThan = (dateArg, refTimeStr) => {
    const date = new Date(dateArg)
    ceilToMinutes(date)

    const refDate = dateWithGivenTime(date, refTimeStr)

    return date >= refDate
}

const timeOfDateIsEarlierOrEqThan = (dateArg, refTimeStr) => {
    const date = new Date(dateArg)
    ceilToMinutes(date)

    const refDate = dateWithGivenTime(date, refTimeStr)

    return date <= refDate
}

const OpeningTimeService = {
    isOpenNow: function() {
        const now = new Date()
        const dayOfWeek = daysOfWeek[now.getDay()]
        let open
        let closedReason
        const defaultClosedReason = "Leider nehmen wir gerade keine Aufträge"

        if (window.appConfig.closed.closed) {
            open = false
            closedReason = window.appConfig.closed.message || defaultClosedReason
        } else {
            if (!window.appConfig.openAt) {
                open = false
                closedReason = defaultClosedReason
            } else {
                const timeSpans = window.appConfig.openAt
                    .filter(timeSpan => {
                        return timeSpan.day === dayOfWeek
                    })

                const matchingSpan = timeSpans && timeSpans.find(timeSpan => timeOfDateIsLaterOrEqThan(now, timeSpan.from) && timeOfDateIsEarlierOrEqThan(now, timeSpan.to))
                open = !!matchingSpan

                closedReason = defaultClosedReason
            }
        }

        return {
            open: open,
            closedReason: closedReason
        }
    }
}

export default OpeningTimeService