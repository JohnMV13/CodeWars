function capitalize(s){

  let word1 = s.split("");
  for(let i = 0; i < word1.length; i++) {
    if(i % 2 === 0) {
      word1[i] = word1[i].toUpperCase();
    }
  }
  console.log(word1);
  
  let word2 = s.split("");
  for(let i = 0; i < word2.length; i++) {
    if(i % 2 !== 0) {
      word2[i] = word2[i].toUpperCase();
    }
  }
  console.log(word2);
  
  return [word1.join(""), word2.join("")];
};