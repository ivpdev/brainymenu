const expect = require("chai").expect;
const sinon = require("sinon");
const OpeningTimeService = require('../src/services/OpeningTimeService');

describe("OpeningTimeService", function() {
    it("should be closed if date range closedConfig match current moment", function() {

       const date = new Date("2019-01-13");
       const clock = sinon.useFakeTimers(date.getTime());

       const closedConfig = {
        closed: true,
        fromDate: "12.01.2019",
        toDate: "14.01.2019"
       }

       debugger

       const closed = OpeningTimeService.default.isClosedNow(closedConfig)
       expect(closed).to.equal(true)


       clock.restore();
    });

    it("should be closed if date range closedConfig does NOT match current moment", function() {
       const date = new Date("2019-01-15");
       const clock = sinon.useFakeTimers(date.getTime());

       const closedConfig = {
        closed: true,
        fromDate: "12.01.2019",
        toDate: "14.01.2019"
       }


       const closed = OpeningTimeService.default.isClosedNow(closedConfig)
       expect(closed).to.equal(false)


       clock.restore();
    });

    it("should match the same date", function() {
       const date = new Date("2019-01-15");
       const clock = sinon.useFakeTimers(date.getTime());

       const closedConfig = {
        closed: true,
        fromDate: "12.01.2019",
        toDate: "14.01.2019"
       }


       const closed = OpeningTimeService.default.isClosedNow(closedConfig)
       expect(closed).to.equal(false)

       clock.restore();
    });

    it("should ignore invalid date", function() {
       const date = new Date("2019-01-15");
       const clock = sinon.useFakeTimers(date.getTime());

       const closedConfig = {
        closed: true,
        fromDate: "12.01.2019",
        toDate: "16.01.2019ff"
       }

       const closed = OpeningTimeService.default.isClosedNow(closedConfig)
       expect(closed).to.equal(true)

       clock.restore();
    });
})
