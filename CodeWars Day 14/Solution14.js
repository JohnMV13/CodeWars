function capitalize(s,arr){
  let altS = s.split('');
  for(let i = 0; i < arr.length; i++) {
    if(altS[arr[i]]){
      altS[arr[i]] = altS[arr[i]].toUpperCase();
    }
  }
  return altS.join('');
};