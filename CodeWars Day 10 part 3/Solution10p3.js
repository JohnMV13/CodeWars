function find_average(array) {
  let results = array.reduce((total, array) => total + array) / array.length;
  return results;
}