const intersection = require("../05-Intersection/Intersection");

describe("Intersection - Arrays ordenados", function () {
  it("Debe retornar los números que se encuentran en ambos arrays", function () {
    expect(intersection([1, 3, 5, 7, 10], [2, 3, 6, 8, 10, 20])).toEqual([
      3, 10,
    ]);
  });
  it("Debe retornar un array vacío si no hay coincidencias", function () {
    expect(intersection([1, 3, 4, 7], [2, 6, 8, 10, 20])).toEqual([]);
  });

  describe("Extra: Arrays desordenados", function () {
    it("Debe retornar los números que se encuentran en ambos arrays", function () {
      expect(intersection([7, 10, 3, 1, 5], [10, 6, 20, 3, 2, 8])).toEqual(
        expect.arrayContaining([3])
      );
      expect(intersection([7, 10, 3, 1, 5], [10, 6, 20, 3, 2, 8])).toEqual(
        expect.arrayContaining([10])
      );
    });
  });
});
