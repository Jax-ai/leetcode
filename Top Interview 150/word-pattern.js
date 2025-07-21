/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    // You can start building your solution here
    let splitString = s.split(" ");
    let map, reverseMap = {};


    for(let i = 0; i < pattern.length; i++) {

        map[pattern[i]] = splitString[i];
        reverseMap[splitString[i]] = pattern[i];
    }






















    for(let i = 0; i < pattern.length; i++) {

        if(!map[pattern[i]]) {

            // Check if its already mapped


            map[pattern[i]] = splitString[i];

        }
    }

    // Check the pattern
    for(let i = 0; i < pattern.length; i++) {

        // Lookup what character maps to
        let mapTo = map[pattern[i]];

        // Check if they match
        if(splitString[i] != mapTo) {

            return false;
        }

    }

    return true;

};

// Test cases to debug
const tests = [
    { pattern: "abba", s: "dog cat cat dog", expected: true },
    { pattern: "abba", s: "dog cat cat fish", expected: false },
    { pattern: "aaaa", s: "dog cat cat dog", expected: false },
    { pattern: "abc", s: "dog cat fish", expected: true },
    { pattern: "abc", s: "dog dog dog", expected: false },
    { pattern: "a", s: "dog", expected: true },
];

// Run the tests
for (const { pattern, s, expected } of tests) {
    const result = wordPattern(pattern, s);
    console.log(
        `pattern: "${pattern}", s: "${s}"\n` +
        `result: ${result}, expected: ${expected} -> ${result === expected ? "PASS ✅" : "FAIL ❌"}\n`
    );
}
