const MaxValue = require("../01-MaxValue/MaxValue");

describe("MaxValue", function () {
  it("Debe retornar 9 si el array de shares es [4,3,2,5,11]", function () {
    expect(MaxValue([4, 1, 2, 5, 11])).toEqual(10);
  });
  it("Debe retornar 5 si el array de shares es [23,7,3,4,8,6]", function () {
    expect(MaxValue([23, 7, 3, 4, 8, 6])).toEqual(5);
  });
});
