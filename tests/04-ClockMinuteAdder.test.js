const clockMinuteAdder = require("../04-ClockMinuteAdder/ClockMinuteAdder");

describe("ClockMinuteAdder", function () {
  it("Debe retornar '09:20' si agrego 20 minutos a '9:00'", () => {
    expect(clockMinuteAdder("09:00", 20)).toEqual("09:20");
  });
  it("Debe retornar '02:00' si agrego 30 minutos a '1:30'", () => {
    expect(clockMinuteAdder("01:30", 30)).toEqual("02:00");
  });
  it("Debe retornar '01:45' si agrego 100 minutos a '12:05'", () => {
    expect(clockMinuteAdder("12:05", 100)).toEqual("01:45");
  });
  it("Debe retornar '08:00' si agrego 90 minutos a '06:30'", () => {
    expect(clockMinuteAdder("06:30", 90)).toEqual("08:00");
  });
  it("Debe retornar '12:05' si agrego 1440 minutos a '12:50'", () => {
    expect(clockMinuteAdder("12:05", 1440)).toEqual("12:05");
  });
});
