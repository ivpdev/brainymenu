const moment = require('moment');
const _ = require('lodash');

const dateFormat = 'DD.MM.YYYY';

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
    isAvailableNow: function(availableAt) {//TODO refactor: merge matching logic
        const now = new Date()
        const dayOfWeek = daysOfWeek[now.getDay()]

        if (!availableAt) return true;

        const timeSpans = availableAt.filter(timeSpan => {
            const noDayLimit = !timeSpan.day;
            return noDayLimit || timeSpan.day === dayOfWeek
        });

        const matchingSpan = timeSpans.find(timeSpan => timeOfDateIsLaterOrEqThan(now, timeSpan.from) && timeOfDateIsEarlierOrEqThan(now, timeSpan.to))
        return !!matchingSpan
    },

    isOpenNow: function() {
        return this.getOpeningInfo().open
    },

    whyClosed: function() {
        return this.getOpeningInfo().closedReason
    },

    isNowEqLaterThanDate: function(dateStr) {
        if (!dateStr) return true;
        if (!moment(dateStr, dateFormat).isValid()) {
            console.error("config.closed.fromDate has invalid format and will be ignored");
            return true;
        }

        return moment(new Date()).isSameOrAfter(moment(dateStr, dateFormat), 'day');
    },

    isNowEqEarlierThanDate: function(dateStr) {
        if (!dateStr) return true;
        if (!moment(dateStr, dateFormat).isValid()) {
            console.error("config.closed.toDate has invalid format and will be ignored");
            return true;
        }

        return moment(new Date()).isSameOrBefore(moment(dateStr, dateFormat), 'day');
    },

    isClosedNow: function(closedConfig) {
        const closed = closedConfig.closed
                && this.isNowEqLaterThanDate(closedConfig.fromDate)
                && this.isNowEqEarlierThanDate(closedConfig.toDate);

        return !!closed
    },

    isOpenAtConfigMatchNow: function(openAtConfig) {
        if (!openAtConfig) return false

        const now = new Date()
        const dayOfWeek = daysOfWeek[now.getDay()]

        const timeSpans = openAtConfig
                            .filter(timeSpan => {
                                return timeSpan.day === dayOfWeek
                            })

        const matchingSpan = timeSpans && timeSpans.find(timeSpan => timeOfDateIsLaterOrEqThan(now, timeSpan.from) && timeOfDateIsEarlierOrEqThan(now, timeSpan.to))

        return !!matchingSpan

    },

    getOpeningInfo: function() {
        let open
        let closedReason
        const defaultClosedReason = "Leider nehmen wir gerade keine Aufträge" //TODO i18n

        const hasNoOpenAtConfig = !window.appConfig.openAt;
        const isClosedByClosedConfig = window.appConfig.closed.closed && this.isClosedNow(window.appConfig.closed);
        const isOpenAtConfigMatchNow = this.isOpenAtConfigMatchNow(window.appConfig.openAt);

        if (hasNoOpenAtConfig) {
            open = false;
            closedReason = defaultClosedReason;
        } else if (isClosedByClosedConfig) {
            open = false;
            closedReason = _.get(window, 'appConfig.closed.message') || defaultClosedReason;
        } else {
            open = isOpenAtConfigMatchNow
            closedReason = isOpenAtConfigMatchNow ? undefined : defaultClosedReason;
        }

        return {
            open: open,
            closedReason: closedReason
        }
    }
}

export default OpeningTimeService