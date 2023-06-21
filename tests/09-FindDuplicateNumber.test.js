const findDuplicateNumber = require("../09-FindDuplicateNumber/findDuplicateNumber");

describe("FindDuplicateNumber", () => {
  it("Debe retornar el número repetido dentro del array", () => {
    const arr1 = [1, 2, 3, 4, 5, 5];
    const arr2 = [1, 2, 3, 1, 4, 5, 6, 7, 8];
    const arr3 = [1, 2, 2];
    const arr4 = [1, 3, 4, 2, 2, 5, 7, 6];
    expect(findDuplicateNumber(arr1)).toBe(5);
    expect(findDuplicateNumber(arr2)).toBe(1);
    expect(findDuplicateNumber(arr3)).toBe(2);
    expect(findDuplicateNumber(arr4)).toBe(2);
  });
});
