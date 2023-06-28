function spyOn(fn) {
  // Tu código aquí

  // Opción 1 -> con Arrays

  let count = 0;
  let cacheValues = [];
  let cacheResults = [];

  const spy = (...args) => {
    count++;
    for (const v of args) cacheValues.push(v);
    let result = fn(...args);
    cacheResults.push(result);
    return result;
  };

  spy.getCallCount = () => count;
  spy.wasCalledWith = (value) => cacheValues.includes(value);
  spy.returned = (value) => cacheResults.includes(value);

  return spy;

  // Opción 2 -> con Objetos

  let count = 0;
  let cacheValues = {};
  let cacheResults = {};

  const spy = (...args) => {
    count++;
    for (const v of args) cacheValues[v] = true;
    let result = fn(...args);
    cacheResults[result] = true;
    return result;
  };

  spy.getCallCount = () => count;
  spy.wasCalledWith = (value) => !!cacheValues[value];
  spy.returned = (value) => !!cacheResults[value];

  return spy;
}

module.exports = spyOn;
