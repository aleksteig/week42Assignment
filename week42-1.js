/*
    Hi.
    This is a set of practice exercises.
    The purpose is to focus on a few things at a time.
    You do this by writing your answer after a task is given (see the example).

    DO NOT change any code that is provided unless the task specifically says so.
*/

/* -----------------------------------------------------------------------------
    Task: Example
    Write the code to print all the names in the list, one name per line
*/
console.log("Task: Example");
const people = ["Tony", "Christian", "Håkon"]

for (let index = 0; index < people.length; index++) {
    let person = people[index];
    console.log(person);
}

/* -----------------------------------------------------------------------------
    Task: A
    Create a function that returns an array of length m-n, 
    n is the min value. 
    m is the max value. 
    if n = 5 and m is 10 the returned array sholuld be [5,6,7,8,9]
    Use loops and arrays to achive the goal. 
*/
console.log("Task: A");

function arrayFromRangeOfNumbers(startOfArray, endOfArray){
    let arrayFromNumbers = [];
    for (i = startOfArray; i < endOfArray; i++){
        arrayFromNumbers.push(i);
    }
    return arrayFromNumbers;
}

console.log(arrayFromRangeOfNumbers(4, 9));

/* -----------------------------------------------------------------------------
    Task: B
    Create two arrays using your function from task a.
    first array n = 5, m = 11
    second array n = 8, m = 23
    
    Create a function that combines the two arrays into one, but no duplicate values. 
    Use for loops
*/
console.log("Task: B");

let arrayOne = arrayFromRangeOfNumbers(5, 11);
let arrayTwo = arrayFromRangeOfNumbers(8, 23);

function combineTwoArrays(firstArray, secondArray){
    let newCombinedArray = [];
    for(i = 0; i < firstArray.length; i++){
        newCombinedArray.push(firstArray[i]);
    }

    for(i = 0; i < secondArray.length; i++){
        let isDuplicate = false;
        for(j = 0; j < newCombinedArray.length; j++){
            if(secondArray[i] == newCombinedArray[j]){
                isDuplicate = true;
                break;
            }

        }
        if (!isDuplicate){
            newCombinedArray.push(secondArray[i]);
        }
    }

    return console.log(newCombinedArray.sort((a, b) => a - b));
}

combineTwoArrays(arrayOne, arrayTwo);

/* -----------------------------------------------------------------------------
    Task: C
    Following you will find an alphabet a encrypted text and a shift value. 
    The message is encrypted using a cesar chipher https://en.wikipedia.org/wiki/Caesar_cipher 
    Create a function that 
    - Takes three parameters message, alphabet and shift 
    - Creates the key based on the alphabet and the shift value. 
    - decrypts and returns the message.
    Use arrays and for loops. 
*/
console.log("Task: C");
const ALPHABET = "abcdefghijklmnopqrstuvwxyz"
const message = "ckrr jutk"
let shift = 6

function solveEncryptionByShifts(message, alphabet, shift){

    let decryptedMessage = "";
    for(i=0; i<message.length; i++){
        const char = message[i];
        
        if (char == " "){
            decryptedMessage += " ";

        }else{
            const posInAlphabet = alphabet.indexOf(char);
            let posInAlphabetAfterShift = (posInAlphabet - shift) % alphabet.length;

            if (posInAlphabetAfterShift < 0){
                posInAlphabetAfterShift += alphabet.length;
            }

            decryptedMessage += alphabet[posInAlphabetAfterShift];
        }

    }
    return decryptedMessage;
}

console.log(solveEncryptionByShifts(message, ALPHABET, shift));

/* -----------------------------------------------------------------------------
    Task: D

    You are given a list of numbers.
    Write a function that takes the list and a target sum as input parameters
    The function is then to figure out what two numbers in the list that summed makes the provided sum.

    Example:
    [3,2,6,9]
    target 9
    -> [3,6]

*/
console.log("Task: D");

const numbers = [1, 23, 14, 56, 42, 33, 0, 3];
const target = 36;

function sumNumbersToTarget(numbers, target){
    let sumOfNumbers;
    for(i=0; i<numbers.length; i++){
        for (j = 0; j < numbers.length; j++){
            sumOfNumbers = numbers[i] + numbers[j];
            if (sumOfNumbers == target){
                return console.log([numbers[i], numbers[j]]);
            }
        }
    }
}

sumNumbersToTarget(numbers, target);



/* -----------------------------------------------------------------------------
    Task: E
    Create a function that takes a number as inputt and returns the number of digits in that number. 
    123 -> 3
    2 -> 1
    42693 -> 5
*/
console.log("Task: E");

function numberOfDigitsInNumber (number){
    let digits = 0;
    let stringNumber = number.toString()
    for(i=0; i<stringNumber.length; i++){
        digits += 1;
    }
    return console.log(digits);
}

numberOfDigitsInNumber(0);
