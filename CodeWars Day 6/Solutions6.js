function isNice(arr){
  if(arr.length === 0) {
    return false;
  }
  for ( let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j] -1 || arr[i] === arr[j] +1) {
        break;
      }
      if(j === arr.length - 1) {
          return false;
      }
    }
  }
  return true;
 }