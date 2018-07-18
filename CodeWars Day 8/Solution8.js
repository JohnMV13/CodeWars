var gimme = function (inputArray) {
  let z;
  inputArray.forEach(x=>{
    if(x<=inputArray[0] && x<=inputArray[1] && x<=inputArray[2]) {
      
    }
    else if(x>=inputArray[0] && x>=inputArray[1] && x>=inputArray[2]) {
      
    }
    else { 
      z = x;
    }
  })
  return inputArray.indexOf(z);
};