function MaxValue(shares) {
  // Tu código aquí

  // Opción 1

  let maxValue = 0;
  for (let i = 0; i < shares.length - 1; i++) {
    let a = shares[i];
    for (let j = i + 1; j < shares.length; j++) {
      let b = shares[j];
      if (b - a > maxValue) maxValue = b - a;
    }
  }
  return maxValue;
  // O(n2)

  // Opción 2

  let maxValue = shares[1] - shares[0];
  let aux = shares[0];
  for (let i = 1; i < shares.length; i++) {
    if (shares[i] - aux > maxValue) maxValue = shares[i] - aux;
    if (shares[i] < aux) aux = shares[i];
  }
  return maxValue;
  // O(n)
}

module.exports = MaxValue;
