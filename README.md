# CodeWars
Day 1

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot seperating them.

It should look like this:

Sam Harris => S.H

Patrick Feeney => P.F

www.codewars.com/kata/abbreviate-a-two-word-name

Ben and I started out by going to the kata to find out what the problem entailed. Then he and I went to whiteboarding our solutions to the problem. We knew that we had to get the first letters of both names away from the rest of their names and get them to be two separate strings, so we looked in our books and found a string function that would make the one string into two separate strings. that function was .split(' '). this function got rid of the space between the first name and the last name. After that, we needed to find a string function to get the first letters from those two strings. The function we found for that was .charAt(0). With this function, we were able to grab the first letters from the strings and were about ready to finish up the whole function. As we were testing this out, we realized that the function was not turning the letters from the function into capitol letters. Due to that, we needed the function .toUpperCase to make sure those letters became upper case. With that, our function was complete and it was able to pass all of the tests in this problem.

Day 2

You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics - simples!

https://www.codewars.com/kata/my-head-is-at-the-wrong-end

Taylor and I started by looking at the problem to see what we were dealing with. Once we saw the problem, we went to the whiteboard to figure out what we needed to do. We found out that we needed to make an array for the meerkats and then needed to make a function to reverse the array. After doing that, we went to code wars and put in our answer and it worked. 

CodeWars Day 3

Write a function insertDash(num)/InsertDash(int num) that will insert dashes ('-') between each two odd numbers in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd number.

https://www.codewars.com/kata/insert-dashes/train/javascript

Craig and I went to code wars to look at the problem. After looking at it, we went to the whiteboard to figure out our plan for the problem. We figured that we would have to turn the array into a stringthat way we could get each number individually so we could get the function to find two odd numbers that were next to each other. After that, we went back to code wars to put our answers together.

CodeWars Day 4

Write a simple regex to validate a username. Allowed characters are:

lowercase letters,
numbers,
underscore
Length should be between 4 and 16 characters (both included).

https://www.codewars.com/kata/simple-validation-of-a-username-with-regex/train/javascript

Dylan and I started by going to code wars to see the problem. We then went to start whiteboarding our solution. We figured that we needed a way to test to see if the user names were all hitting the lowercase check, the numbers check and the under score check and if it hit all those checks, it would return true. Then we went to code wars to put in our answer.

CodeWars Day 5 part 1

https://www.codewars.com/kata/regex-validate-pin-code/train/javascript

ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

First, Nathan and I went to code wars to look at the problem. Next we went to the whiteboard to write out our problem. We figured that we needed to regex only numbers that had either only 4 or 6 digits in it. We went back to code wars and tried putting in our solution.