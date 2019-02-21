/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  if (preferences.length < 3)
    return 0;
  preferences = preferences.map(k => k - 1);
  return preferences.reduce((accumulator, k, n) => {
    if (isInTriangle.call(preferences, n)) {
      return accumulator + 1;
    }
    return accumulator;
  }, 0);
};

function isInTriangle(triangleStart) {
  let currentElem = triangleStart, lover, loveTriangle = [];
  while(loveTriangle.length < 3) {
    lover = this[currentElem];
    if (lover == -1 || lover == currentElem) {
      return false;
    }
    loveTriangle.push(currentElem);
    currentElem = lover;
  }
  if (this[loveTriangle[2]] == triangleStart) {
    deletePrefsOfElemsFromTriangle.call(this, loveTriangle);
    return true;
  }
  return false;
}

function deletePrefsOfElemsFromTriangle(triangle) {
  triangle.forEach(n => {
    this[n] = -1;
  });
}
