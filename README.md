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

Code War Day 5 pt 2

Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!

https://www.codewars.com/kata/alternate-capitalization/train/javascript

Nathan and I started out by checking the Code war. After looking at it we went to white board the problem. We decided that we needed to split the string, find a way to get the letters to alternate between capital and lowercase letters. After that, we went to put in the solution.

Code Wars Day 6

A Nice array is defined to be an array where for every value n in the array, there is also an element n-1 or n+1 in the array.

example:

[2,10,9,3] is Nice array because

2=3-1
10=9+1
3=2+1
9=10-1
Write a function named isNice/IsNice that returns true if its array argument is a Nice array, else false. You should also return false if input array has no elements.

https://www.codewars.com/kata/nice-array/train/javascript

Marc and I started by going to CodeWars to checkout the problem. After that, we went to start white boarding. What we had to do was loop through each element of the array. After that we needed to check to see if there were anymore elements in the array. If there were, then we would go to the next element in i. If not then we would result the array as false. After going to element i, we needed to loop through element j. While there, we needed to check to see if there were any elements in j that were + or - 1 from element i. If there was, then we would loop back up to i and redo the entire loop with the next element in i. If not, we would return the array as false. Once we looped through all of i and everything checked out, it would return the array as true. Once we had that all figured out, we went back to code wars and put in our answer.

CodeWars Day 7

https://www.codewars.com/kata/disemvowel-trolls/train/javascript

Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.

First, Craig and I started by going to code wars to look at the problem for today. After looking over the problem, we went to whiteboard our thoughts to the solution. We figured that we had to do regex to remove the vowels from the string and then put the string back without the vowels. After that, we went back to code wars to put in our answers.

Code Wars Day 8

https://www.codewars.com/kata/find-the-middle-element/train/javascript

As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

First, Ethan and I started by going to code wars to see the problem. After thet, We went to the whiteboard to figure out our answer. We decided that we needed to do a few if statements and then return the result as our answer. After figuring that out, we went back to codewars to put in the solution.

Code Wars Day 9

https://www.codewars.com/kata/reversed-strings/train/javascript

Complete the solution so that it reverses the string value passed into it.

solution('world'); // returns 'dlrow'

First, Taylor and I went to Code Wars to look at the problem. AAfter that, we went to the whiteboard to write down our solution. We figured that we needed to split the string into individual letters, reverse the string and then join them back together. Then we went back to code wars to put in our solution.

Code Wars Day 10

https://www.codewars.com/kata/use-map-to-double-the-values-in-an-array/train/javascript

Make the double() function return a new array with each value twice as large as the corresponding value in the passed in array. Your solution must use the map() function of the built-in javascript Array object. If you're not familiar with map(), reading over the documentation may help.

function double(array) {
    // Use array.map() to return a new array with each value twice
    // as large as the corresponding value in the passed in array.
}
For example:

var someNumbers = [1,2,10,57];

double(someNumbers); // should return [2,4,20,114]

Ben and I first went to code wars to see what we had to do. We went to the whiteboard and put down that we had to use .map to double the numbers in an array. Then we went to put in our solution.

Code Wars pt2

https://www.codewars.com/kata/list-filtering/train/javascript

In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

Ben and I went to see the problem for this kata. We then went to the whiteboard to figure out our solution. We figured that we needed to filter out the strings from the array. Then we went back and put in our solution.

Code Wars pt 3

https://www.codewars.com/kata/calculate-average/train/javascript

Write function avg which calculates average of numbers in given list.

Ben and I went to code wars to see the problem and then went to whiteboard our solution. We figured out that we needed to reduce the numbers in the array by adding them together and then divide them. 

Code Wars Day 11

https://www.codewars.com/kata/sum-of-odd-cubed-numbers/train/javascript

Find the sum of the odd numbers within an array, after cubing the initial integers. This function will return undefined (NULL in PHP) if any of the values aren't numbers.

Note: There are ONLY integers in the JAVA and C# versions of this Kata.

Nathan and I first went to code wars to see the problem for today and then we went to whiteboard the solution. We saw that we needed to start by cubing the array and filtering the array at the same time. After that, we needed to reduce the array and add together the integers in the array. Then we went to code wars to put in our solution.