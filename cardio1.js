//Challenge 1: Reverse a string
//Return string in reverse
//ex. reverseString('hello') === 'olleh'

function reverseString(str) {
    // const strArr = str.split('');
    // strArr.reverse();
    // console.log(strArr);
    // return strArr.join('');

    // return str
    //     .split('')
    //     .reverse()
    //     .join('');

    // let revString = '';
    // for(let i = str.length - 1; i >= 0; i--) {
    //     revString = revString + str[i];
    // }
    // return revString;

    // let revString = '';
    // for(let i = 0; i <= str.length - 1; i++) {
    //     revString = str[i] + revString;
    // }
    // return revString;

    // let revString = '';
    // for(let char of str) {
    //     revString = char + revString;
    // }
    // return revString;

    // let revString = '';
    // str.split('').forEach(char => revString = char + revString);
    // return revString;

    // return str.split('').reduce((revString, char) => char + revString, '');
}

//Challenge 2: Validate a palindrome
//Return true if palindrome and false if not
//ex. isPalindrome('racecar') === true, 
//is.Palindrome('hello') == false

function isPalindrome(str) {
    // const revString = str.split('').reverse().join('');

    // return revString === str;
}

//Challenge 3: Reverse an integer
//Return an integer in reverse
//ex. reverseInt(521) == 125

function reverseInt(int) {
    // const revString = int.toString().split('').reverse().join('');
    
    // return parseInt(revString) * Math.sign(int);
}

//Challenge 4: Capitaliza Letters
//Return a string with the first letter of every word capitalized
//ex. CapitalizaLetters('i love javascript') === 'I Love Javascript'

function CapitalizeLetters(str) {
    // const strArr = str.toLowerCase().split(' ');
    // for(let i = 0; i < strArr.length; i++) {
    //     strArr[i] = strArr[i].substring(0, 1).toUpperCase() + 
    //     strArr[i].substring(1);
    // }
    // return strArr.join(' ');

    // return str
    //     .toLowerCase()
    //     .split(' ')
    //     .map(word => word[0].toUpperCase() + word.substr(1))
    //     .join(' ');

    // return str.replace(/\b[a-z]/gi, function(char) {
    //     return char.toUpperCase();
    // });
}

//Challenge 5: Max Character
//Return the character that is the monst common in a string
//ex. maxCharacter('Javascript') == 'a'
function maxCharacter(str) {
    // const charMap = {};
    // let maxNum = 0;
    // let maxChar= '';
    // str.split('').forEach(function(char) {
    //     if(charMap[char]) {
    //         charMap[char]++;
    //     } else {
    //         charMap[char] = 1;
    //     }
    // });
    // for(let char in charMap) {
    //     // // debugger;
    //     if(charMap[char] > maxNum) {
    //         maxNum = charMap[char];
    //         maxChar = char;
    //     }
    // }
    // return maxChar;
}

//Challenge 6: FizzBuzz
//Write a program that prints all the numbers from 1 to 100
//for multiples pf 3, instead of the number, print
// "Fizz", for multiples of 5 print "Buzz", for numbers
//wich are multiples of both 3 and 5 print "FizzBuzz".
function fizzBuzz() {
    for(let i = 1; i <= 100; i++) {
        if(i % 15 === 0) {
            console.log('FizzBuzz');
        }
        else if(i % 3 === 0) {
            console.log('Fizz');
        } else if(i % 5 === 0) {
            console.log('Buzz');
        }
        else {
            console.log(i);
        }
    }
}

//Calling funtions

// const output = reverseString('hello');
// const output = isPalindrome('racecar');
// const output = reverseInt('-521');
// const output = CapitalizeLetters('i love javascript');
// const output = maxCharacter('Javascript');
const output = fizzBuzz();

console.log(output);