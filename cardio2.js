//Challenge 1: Longest Word
//Return the longest word of a string
//if more than one longest word, put into an array
//ex. longestWord('Hello, my name is Planetfunk') === ['hello', 'there']
function longestWord(sen){
    // // Create filtered array
    // const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
    // // Sort by length
    // const sorted = wordArr.sort((a, b) => b.length - a.length);
    // //if multiple words, put into array
    // const longestWordArr = sorted.filter((word) => word.length === sorted[0].length);
    // //if more than on array val
    // if(longestWordArr.length === 1) {
    //     return longestWordArr[0];
    // } else {
    //     return longestWordArr;
    // }
}

//Challenge 2: Array Chunking
//split an array into chunked arrays of a specific length
//ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3], [4, 5, 6], [7]]
//es chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2], [3, 4], [5, 6], [7]]
function chunkArray(arr, len) {
    // // init chunked arr
    // const chunkArr = [];
    // //set index
    // let i = 0;
    // //lopp while index is less than the array length
    // while(i < arr.length) {
    //     // Slice out from the index to the index + the chunk length
    //     //and push on to the chunked array
    //     chunkArr.push(arr.slice(i , i + len));
    //     //increment by chunk length
    //     i += len;
    // }
    // return chunkArr;

    //Solution 2
    //init chunked arr
    // const chunkedArr = [];
    // //loop through arr
    // arr.forEach((val) => {
    //     //get last element
        // const last = chunkedArr[chunkedArr.length -1];
    //     //check if last and if last length is equal to
    //     //the chunck len
    //     if(!last || last.length === len) {
    //         chunkedArr.push([val]);
    //     } else {
    //         last.push(val);
    //     }
    // });
    // return chunkedArr;
}

//Challenge 3: Flatten Array
//Take an array and flatten to a single array
//ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]
function flattenArray(arrays) {
    //Solution 1
    // return arrays.reduce((a, b) => a.concat(b));

    //Solution 2
    // return [].concat.apply([], arrays);

    //Solution 3
    // return [].concat(...arrays);
}

//challenge 4: Anagram
//Return true if anagram and flast if not
//ex. 'elbow' === 'below'
//ex. 'Dormitory' === 'dirty room##'
function isAnagram(str1, str2) {
    // return formatStr(str1) === formatStr(str2);
}
//helper function
function formatStr(str) {
    // return str
    //     .replace(/[^\w]/g, '')
    //     .toLowerCase()
    //     .split('')
    //     .sort()
    //     .join('');
}

//Challenge 5: Letter Changes
//Change every letter of the string to the one that follows it
//and capitaliza teh vowels
//Z should be to A
//ex. 'hellothere' === 'Ifmmp UIfsf'
function letterChanges(str) {
    let newStr = str.toLowerCase().replace(/[a-z]/gi, char => {
        if(char === 'z' || char === 'Z') {
            return 'a';
        } else {
            return String.fromCharCode(char.charCodeAt() + 1);
        }      
    });
    newStr = newStr.replace(/[a|e|i|o|u]/gi, vowel => vowel.toUpperCase());

    return newStr;
}

//Calling functions
// const output = longestWord('Hello there, my name is kev');
// const output = chunkArray([1, 2, 3, 4, 5, 6, 7], 3);
// const output = flattenArray([[1, 2], [3, 4], [5, 6], [7]]);
// const output = isAnagram('Dormitory', 'dirty room');
const output = letterChanges('Hello there');

console.log(output);