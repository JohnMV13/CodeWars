function cubeOdd(arr) {
  for(var i=0; i < arr.length; i++){
    if (isNaN(arr[i])) {
      return undefined;
    }
  }
  
  return arr
  .map(a => Math.pow(a,3))
  .filter(a=> Math.pow(a%2,2)===1)
  .reduce((acc, val) => val+acc, 0);
}