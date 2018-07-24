function high(x){
  let y = x.split(' ');
  let z = y.map(word => (
    {wordName : word,
    score : word.split('').reduce((acc, val) =>
      val.toString().charCodeAt(0)-96+acc,0)
    })
  );console.log(z);
  let wordHigh = '';
  let highScore = 0;
  for(i = 0; i <z.length; i++) {
    if(z[i].score > highScore){
      wordHigh = z[i].wordName;
      highScore = z[i].score;
    };
  }
  return wordHigh;
}