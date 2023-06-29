const findDuplicateNumber = (arr) => {
  // Tu código aquí

  // Opción 1

  let mirrorArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!mirrorArr.includes(arr[i])) {
      mirrorArr.push(arr[i]);
    } else {
      return arr[i];
    }
  }
  return false; // -> O(n^2)

  // Opción 2

  let objArr = {};
  for (let i = 0; i < arr.length; i++) {
    if (!objArr[arr[i]]) {
      objArr[arr[i]] = true;
    } else {
      return arr[i];
    }
  }
  return false; // -> O(n)
};

module.exports = findDuplicateNumber;
