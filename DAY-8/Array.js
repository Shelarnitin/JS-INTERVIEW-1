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



/****************RepeatSubstring ***************/

function repeatSubstring(s) {
    const n = s.length;

    for (let len = Math.floor(n / 2); len >= 1; len--) {
        if (n % len !== 0) continue;

        let sub = "";
        for (let i = 0; i < len; i++) {
            sub += s[i];
        }

        let built = "";
        for (let i = 0; i < n / len; i++) {
            built += sub;
        }

        if (built === s) {
            return sub;
        }
    }

    return "";
}

console.log(repeatSubstring("abababab")); // "abab"
console.log(repeatSubstring("aaaa"));     // "aa"
console.log(repeatSubstring("abcabcab")); // ""
console.log(repeatSubstring("xyzxyz"));   // "xyz"



// *************** FindMostcommenString ******************

function findMostCommonSubstring(s, length) {
    if (length <= 0 || length > s.length) return "";

    let freq = {};
    let maxCount = 0;
    let answer = "";

    for (let i = 0; i <= s.length - length; i++) {
        // build substring manually
        let sub = "";
        for (let j = 0; j < length; j++) {
            sub += s[i + j];
        }

        // update frequency
        if (freq[sub] === undefined) {
            freq[sub] = 1;
        } else {
            freq[sub]++;
        }

        // update best answer
        if (
            freq[sub] > maxCount ||
            (freq[sub] === maxCount && (answer === "" || sub < answer))
        ) {
            maxCount = freq[sub];
            answer = sub;
        }
    }

    return answer;
}

console.log(findMostCommonSubstring("bananabananaba", 5));   // anaba
