
let str = 'a';
function longestPal(str) {
    if (!str || str.length < 1) return "";

    let longest = "";

    function expandAroundCenter(left, right) {
        while (left >= 0 && right < str.length && str[left] === str[right]) {
            left--;
            right++;
        }
        // slice out the matching part
        return str.slice(left + 1, right);
    }

    for (let i = 0; i < str.length; i++) {
        let odd = expandAroundCenter(i, i);       // check for odd-length palindromes
        let even = expandAroundCenter(i, i + 1);   // check for even-length palindromes

        // update longest if needed
        if (odd.length > longest.length) longest = odd;
        if (even.length > longest.length) longest = even;
    }

    return longest;
}

console.log(longestPal(str))
