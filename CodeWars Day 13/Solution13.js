function mutateMyStrings(stringOne, stringTwo){
  let str1 = stringOne + '\n';
  let str1Split = stringOne.split('');
  str1Split.push('\n');
  let arr = [str1];
  for(let i = 0; i < stringTwo.length; i++) {
    if(str1Split[i] !== stringTwo[i]){
      str1Split[i] = stringTwo[i];
      arr[i+1] = str1Split.join('');
    }
  }
  return arr.join('');
}