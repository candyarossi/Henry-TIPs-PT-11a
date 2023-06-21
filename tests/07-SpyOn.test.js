const spy = require("../07-SpyOn/SpyOn");

describe("SpyOn", function () {
  const adder = (n1, n2) => {
    return n1 + n2;
  };
  let adderSpy;
  beforeEach(() => {
    adderSpy = spy(adder);
  });

  it("Debe retornar una función spy", () => {
    expect(typeof adderSpy).toBe("function");
  });

  it("La función spy debe retornar lo que retorna la función original", () => {
    expect(adderSpy(1, 1)).toBe(2);
    expect(adderSpy(7, 2)).toBe(9);
    expect(adderSpy(10, -10)).toBe(0);
    expect(adderSpy(123, 123)).toBe(246);
  });

  it("La función spy debe poseer el método getCallCount", () => {
    expect(typeof adderSpy.getCallCount).toBe("function");
  });

  it("La función spy debe poseer el método wasCalledWith", () => {
    expect(typeof adderSpy.wasCalledWith).toBe("function");
  });

  it("La función spy debe poseer el método returned", () => {
    expect(typeof adderSpy.returned).toBe("function");
  });

  it("El método getCallCount debe retornar la cantidad de veces que se ha ejecutado la función", function () {
    expect(adderSpy.getCallCount()).toBe(0);
    adderSpy(2, 3);
    expect(adderSpy.getCallCount()).toBe(1);
    adderSpy(4, 5);
    adderSpy(5, 6);
    expect(adderSpy.getCallCount()).toBe(3);
  });

  it("El método wasCalledWith debe retornar true si la función spy fue invocada algun vez con el argumento", function () {
    adderSpy(2, 3);
    expect(adderSpy.wasCalledWith(2)).toBe(true);
    expect(adderSpy.wasCalledWith(3)).toBe(true);
  });

  it("El método wasCalledWith debe retornar false si la función spy nunca fue invocada con el argumento", function () {
    adderSpy(2, 3);
    expect(adderSpy.wasCalledWith(4)).toBe(false);
    expect(adderSpy.wasCalledWith(5)).toBe(false);
  });

  it("El método returned debe retornar true si la función spy retornó alguna vez el valor", function () {
    adderSpy(2, 3);
    adderSpy(2, 4);
    expect(adderSpy.returned(5)).toBe(true);
    expect(adderSpy.returned(6)).toBe(true);
  });

  it("El método returned debe retornar false si la función spy nunca retornó el valor", function () {
    adderSpy(2, 3);
    expect(adderSpy.returned(6)).toBe(false);
    expect(adderSpy.returned(7)).toBe(false);
  });

  it("La implementación de la función spy debe poder recibir cualquier número de argumentos", function () {
    const adder2 = (n1, n2, n3) => {
      return n1 + n2 + n3;
    };
    const adderSpy2 = spy(adder2);
    expect(adderSpy(5, 6)).toBe(11);
    expect(adderSpy2(5, 6, 9)).toBe(20);
  });
});
