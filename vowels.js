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