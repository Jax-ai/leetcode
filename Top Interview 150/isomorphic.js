// Your function
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;

    const isomorphicFront = {};
    const isomorphicBack = {};

    for (let i = 0; i < s.length; i++) {
        let c1 = s[i];
        let c2 = t[i];

        // Check forward mapping conflict
        if (isomorphicFront[c1] && isomorphicFront[c1] !== c2) {
            return false;
        }

        // Check reverse mapping conflict
        if (isomorphicBack[c2] && isomorphicBack[c2] !== c1) {
            return false;
        }

        isomorphicFront[c1] = c2;
        isomorphicBack[c2] = c1;
    }

    return true;
};

// Test cases
const tests = [
    { s: "egg", t: "add", expected: true },
    { s: "foo", t: "bar", expected: false },
    { s: "paper", t: "title", expected: true },
    { s: "ab", t: "aa", expected: false },
    { s: "abc", t: "def", expected: true },
    { s: "abc", t: "dee", expected: false }
];

// Run tests
for (const { s, t, expected } of tests) {
    const result = isIsomorphic(s, t);
    console.log(`s = "${s}", t = "${t}" → result: ${result} | expected: ${expected} | ${result === expected ? '✅' : '❌'}`);
}
