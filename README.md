# CodeWars
Day 1

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot seperating them.

It should look like this:

Sam Harris => S.H

Patrick Feeney => P.F

www.codewars.com/kata/abbreviate-a-two-word-name

Ben and I started out by going to the kata to find out what the problem entailed. Then he and I went to whiteboarding our solutions to the problem. We knew that we had to get the first letters of both names away from the rest of their names and get them to be two separate strings, so we looked in our books and found a string function that would make the one string into two separate strings. that function was .split(' '). this function got rid of the space between the first name and the last name. After that, we needed to find a string function to get the first letters from those two strings. The function we found for that was .charAt(0). With this function, we were able to grab the first letters from the strings and were about ready to finish up the whole function. As we were testing this out, we realized that the function was not turning the letters from the function into capitol letters. Due to that, we needed the function .toUpperCase to make sure those letters became upper case. With that, our function was complete and it was able to pass all of the tests in this problem.