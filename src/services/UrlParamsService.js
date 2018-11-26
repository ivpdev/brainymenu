
const UrlParamsService = {
    getFilterTerm: function() {
        //encodeURIComponent(JSON.stringify(x)) %5B"vegetarisch"%5D
        const result = {}

        const url = new URL(window.location.href)
        const traitsParam = url.searchParams.get("traits")

        if (traitsParam) {//TODO validate
            const urlDecoded = atob(traitsParam)
            const traits = JSON.parse(urlDecoded)
            result.traits = traits
        }

        return result
    }
}

export default UrlParamsService