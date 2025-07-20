
let str = 'babad';

function expandAroundCenter(left, right) {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
        left--;
        right++;
    }
    // slice out the matching part
    return str.slice(left + 1, right);
}

console.log(expandAroundCenter(0, 0))