function findVowelPositions(s){
    // implement findVoWelPositions without using any built-in string methods

    const positions = [];
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    for (let i = 0; i < s.length; i++) {
        // check each vowel manually (no methods)
        for (let j = 0; j < vowels.length; j++) {
            if (s[i] === vowels[j]) {
                positions.push(i);
                break;  // stop checking once matched
            }
        }
    }
    return positions;
}

console.log(findVowelPositions("Hello WORLD"))


// [02] a replace with b & b replace with c
/*
Input: "Zoo!"
Output: "App!"
*/

function solution(s) {
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  let result = '';

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    let found = false;

    // check lowercase alphabet
    for (let j = 0; j < lower.length; j++) {
      if (ch === lower[j]) {
        // next letter, wrap with modulo
        const next = (j + 1) % lower.length;
        result += lower[next];
        found = true;
        break;
      }
    }
    if (found) continue;

    // check uppercase alphabet
    for (let j = 0; j < upper.length; j++) {
      if (ch === upper[j]) {
        const next = (j + 1) % upper.length;
        result += upper[next];
        found = true;
        break;
      }
    }
    if (found) continue;

    // non-letter characters remain unchanged
    result += ch;
  }

  return result;
}

console.log(solution("NITIN"))
console.log(solution("MHSHM"))



// Case conversion function

const inputString = "HelLo WoRld 123";
let result = "";

for (let i = 0; i < inputString.length; i++) {
    const ch = inputString[i];
    const code = ch.charCodeAt(0);

    // lowercase → uppercase
    if (code >= 97 && code <= 122) {
        result += String.fromCharCode(code - 32);
    }
    // uppercase → lowercase
    else if (code >= 65 && code <= 90) {
        result += String.fromCharCode(code + 32);
    }
    // non-letters remain same
    else {
        result += ch;
    }
}

console.log(result); // hELlO wOrLD 123




// Replace all occurrences of char1 with char2 WITHOUT using replace()

function replaceCharacter(inputString, char1, char2) {
    let result = "";

    for (let i = 0; i < inputString.length; i++) {
        const ch = inputString[i];

        if (ch === char1) {
            result += char2;   // replace char1 → char2
        } else {
            result += ch;      // keep original
        }
    }

    return result;
}

// Test the function
const output = replaceCharacter("hello, world", "o", "a");
console.log(output); // Output: "hella, warld"




// swap
function swapAdjacentPairs(s) {
    let result = "";

    for (let i = 0; i < s.length; i += 2) {
        // if next character exists, swap
        if (i + 1 < s.length) {
            result += s[i + 1];
            result += s[i];
        } 
        // if odd length → keep last character as is
        else {
            result += s[i];
        }
    }

    return result;
}

console.log(swapAdjacentPairs("Nitin"))