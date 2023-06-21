const BinarySearch = require("../06-BinarySearch/BinarySearch");

const testArray = [
  0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 49, 70,
];

describe("BinarySearch - Dado testArray", () => {
  it("Debe retornar [13, 5, 2, 0] para la búsqueda de 0", () => {
    expect(BinarySearch(testArray, 0)).toEqual([13, 5, 2, 0]);
  });
  it("Debe retornar [13, 5, 2, 0, 1] para la búsqueda de 1", () => {
    expect(BinarySearch(testArray, 1)).toEqual([13, 5, 2, 0, 1]);
  });
  it("Debe retornar [13, 5, 2] para la búsqueda de 2", () => {
    expect(BinarySearch(testArray, 2)).toEqual([13, 5, 2]);
  });
  it("Debe retornar el string 'Value not found' en caso de no contener el valor", () => {
    expect(BinarySearch(testArray, 6)).toBe("Value not found");
    expect(BinarySearch(testArray, 24)).toBe("Value not found");
    expect(BinarySearch(testArray, 50)).toBe("Value not found");
    expect(BinarySearch(testArray, 71)).toBe("Value not found");
  });
});
