const expect = require("chai").expect;
const OpeningTimeService = require('../../src/services/OpeningTimeService');

describe("OpeningTimeService", function() {
    it("should match if contains desired trait", function() {
        const date = new Date()
        date.setHours(10)
        date.setHours(0)




      expect(OpeningTimeService.matches(item, desiredTraits)).to.equal(true)
    });
})
