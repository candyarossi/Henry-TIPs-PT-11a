function intersection(arr1, arr2) {
  // Tu código aquí

  // Opción 1

  let arrDup = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) arrDup.push(arr1[i]);
  }
  return arrDup;

  // Opción 2

  return arr1.filter((e) => arr2.includes(e));
}

module.exports = intersection;
