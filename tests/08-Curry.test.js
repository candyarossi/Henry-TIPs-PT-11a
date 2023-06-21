const curry = require("../08-Curry/Curry");

describe("Curring", function () {
  const calcAllFour = (var1, var2, var3, var4) => {
    return var1 + var2 - var3 * var4;
  };

  let curriedDoSomething;

  beforeEach(() => {
    curriedDoSomething = curry(calcAllFour);
  });

  it("Debe retornar una función", function () {
    expect(typeof curry(calcAllFour)).toBe("function");
  });

  it("Las siguientes llamadas deben retornar una función si aún no se han pasado todos los argumentos necesarios", function () {
    const firstReturn = curriedDoSomething(1);
    expect(typeof firstReturn).toBe("function");
    const secondReturn = firstReturn(2, 3);
    expect(typeof secondReturn).toBe("function");
  });

  it("Debe retornar el resultado de la función currificada si ya a ha recibido todos los argumentos necesarios para su ejecución", function () {
    const firstReturn = curriedDoSomething(1);
    const secondReturn = firstReturn(2);
    const thirdReturn = secondReturn(3);
    const fourthReturn = thirdReturn(4);
    expect(fourthReturn).toBe(-9);
  });
});
