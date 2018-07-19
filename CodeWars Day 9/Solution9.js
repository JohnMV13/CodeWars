function solution(str){
  var split = str.split('');
  var reversed = split.reverse();
  var final = reversed.join('');
  console.log(final);
  return final
}