function curry(fn) {
  // Tu código aquí
  let argumentos = [];
  let numArgumentos = fn.length;

  return function fnCurry(argumento) {
    // argumentos.push(argumento);
    // if(argumentos.length === numArgumentos) return fn(...argumentos);
    // else return fnCurry;
    return argumentos.push(argumento) === numArgumentos
      ? fn(...argumentos)
      : fnCurry;
  };
}

// Ejemplo:

function fn(var1, var2, var3, var4) {
  return var1 + var2 - var3 * var4;
}

let argumentos = []; // [1, 2, 3, 4]
let numArgumentos = fn.length; // 4

const curriedDoSomething = curry(fn); //argumentos -> []
// const curriedDoSomething = function fnCurry(argumento) {
//    return argumentos.push(argumento) === numArgumentos
//    ? fn(...argumentos)
//    : fnCurry;
// };

const firstReturn = curriedDoSomething(1); // argumentos -> [1]
// const firstReturn = function fnCurry(argumento) {
//    return argumentos.push(argumento) === numArgumentos
//    ? fn(...argumentos)
//    : fnCurry;
// };

const secondReturn = firstReturn(2); // argumentos -> [1, 2]
// const secondReturn = function fnCurry(argumento) {
//    return argumentos.push(argumento) === numArgumentos
//    ? fn(...argumentos)
//    : fnCurry;
// };

const thirdReturn = secondReturn(3); // argumentos -> [1, 2, 3]
// const thirdReturn = function fnCurry(argumento) {
//    return argumentos.push(argumento) === numArgumentos
//    ? fn(...argumentos)
//    : fnCurry;
// };

const fourthReturn = thirdReturn(4);
// const fourthReturn = -9;

module.exports = curry;
