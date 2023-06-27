function BinarySearch(arr, value, result = []) {
  // Tu código aquí

  // Opción 1

  let middleIndex = Math.floor(arr.length / 2);

  if (arr.length % 2 === 0) middleIndex -= 1;

  result.push(arr[middleIndex]);

  if (arr[middleIndex] === value) return result;

  if (value < arr[middleIndex]) {
    let leftArr = arr.slice(0, middleIndex);
    return BinarySearch(leftArr, value, result);
  } else if (value > arr[middleIndex]) {
    let rightArr = arr.slice(middleIndex + 1);
    return BinarySearch(rightArr, value, result);
  } else {
    return "Value not found";
  }

  // Opción 2

  if (arr.length === 0) return "Value not found";

  let middleIndex = Math.floor(arr.length / 2);
  if (arr.length % 2 === 0) middleIndex -= 1;

  result.push(arr[middleIndex]);

  if (arr[middleIndex] === value) return result;

  return value < arr[middleIndex]
    ? BinarySearch(arr.slice(0, middleIndex), value, result)
    : BinarySearch(arr.slice(middleIndex + 1), value, result);
}

// Big O Notation
// O(log n)

module.exports = BinarySearch;
