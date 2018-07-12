function insertDash(num) {
  let prev='', 
   newstring='';
 
   let insert = num.toString();
   
   for (let i=0; i<insert.length; i++){
     parseInt(insert[i])%2 == 0 ? current='even' : current='odd';
     if (current=='odd' && prev=='odd'){
       newstring=newstring + '-' + insert[i];
       prev='odd';
     } else {
       newstring=newstring + insert[i];
        prev=current;
     }
   }
 
   return newstring;   
 }
 