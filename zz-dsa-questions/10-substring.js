// let s = "abcabcbb"
// let s = "bbbbb"
let s = "pwwkew"
// console.log(s.length - 1)
// console.log(s[0])

// Output: 3  // Explanation: The answer is "abc", with the length of 3.
const lengthOfLongestSubstring = function (s) {
    let longest = '';
    let current = '';

    for (const char of s) {
        if (current.includes(char)) {
            current = current.slice(current.indexOf(char) + 1)
        }
        current += char
        if (current.length > longest.length) {
            longest = current
        }
    }
    return longest.length

};
console.log(lengthOfLongestSubstring(s))

// for (const char of s) {
//     console.log(char)
//     console.log(1)
// }
var lengthOfLongestSubstring2 = function (s) {
    let a = ""
    let b = ""
    for (let i of s) {
        if (!a.includes(i)) {
            a += i
        } else {
            let d = a.indexOf(i)
            a = a.slice(d + 1) + i
        }
        if (a.length > b.length) {
            b = a
        }
    }
    return b.length
}

var lengthOfLongestSubstring1 = function (s) {
    let result = 0;
    let lastIndex = new Map();
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        let char = s[right];
        left = Math.max(left, lastIndex.get(char) || 0);
        result = Math.max(result, right - left + 1);
        lastIndex.set(char, right + 1);
    }

    return result;
};
