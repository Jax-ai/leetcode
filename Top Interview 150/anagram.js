// DEBUG scaffold for Leetcode Anagram Problem

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {   

    
    let sMap = {};
    let tMap = {};

    if(s.length != t.length) return false;

    // Map all the number of letters
    for(let i = 0; i < s.length; i++){

        sMap[s[i]] = (sMap[s[i]] || 0) + 1;
        tMap[t[i]] = (tMap[t[i]] || 0) + 1;

    }

    for(let key in sMap) {

        if(sMap[key] != tMap[key]){

            return false;
        }

    }
    return true;

        // Debug output: show frequency maps
    console.log('sMap:', sMap);
    console.log('tMap:', tMap);
};


// ----------- Test Harness -----------

function testAnagram(s, t, expected) {
    const result = isAnagram(s, t);
    console.log(`s: "${s}", t: "${t}"`);
    console.log(`Expected: ${expected}, Got: ${result}`);
    console.log(result === expected ? "✅ PASS" : "❌ FAIL");
    console.log('-----------------------------------');
}

// Test Cases
testAnagram("anagram", "nagaram", true);   // Example 1
testAnagram("rat", "car", false);         // Example 2

// Edge Cases
testAnagram("", "", true);                 // Empty strings
testAnagram("a", "a", true);               // Single char same
testAnagram("a", "b", false);              // Single char diff
testAnagram("aa", "a", false);             // Unequal lengths
testAnagram("abcd", "dcba", true);         // Reversed

// Unicode Follow-Up Idea (optional for extended testing)
testAnagram("åbc", "cbå", true);           // Unicode example