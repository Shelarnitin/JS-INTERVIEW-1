/************ Duplicates ******************/

function solution(string1, string2) {
    let freq = {};
    let result = "";

    // Count characters in string2
    for (let i = 0; i < string2.length; i++) {
        let ch = string2[i];
        if (freq[ch] === undefined) {
            freq[ch] = 1;
        } else {
            freq[ch]++;
        }
    }

    // Build result based on string1 order
    for (let i = 0; i < string1.length; i++) {
        let ch = string1[i];
        if (freq[ch] > 0) {
            result += ch;
            freq[ch]--;
        }
    }

    return result;
}

console.log(solution("apple", "peach"));  // ape
console.log(solution("flow", "flower"));  // flow
