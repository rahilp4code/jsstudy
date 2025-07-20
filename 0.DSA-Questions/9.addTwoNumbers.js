
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function linkedList(arr) {
    let list = new ListNode(arr[0]);
    let selectedNode = list;
    for (let i = 1; i < arr.length; i++) {
        selectedNode.next = new ListNode(arr[i]);
        selectedNode = selectedNode.next
    }
    return list
}
// var addTwoNumbers = function(l1, l2) {

// };
let l1 = linkedList([2, 4, 3])
let l2 = linkedList([5, 6, 4])



// function addTwoNumbers(l1, l2) {
//     let dummy = new ListNode()
//     let current = dummy
//     let carry = 0;
//     while (l1 !== null || l2 !== null || carry > 0) {
//         let val1 = l1 ? l1.val : 0
//         let val2 = l2 ? l2.val : 0
//         let total = val1 + val2 + carry
//         let nodeVal = total % 10;
//         let carry = Math.floor(total / 10);
//         console.log(current)
//         current.next = new ListNode(nodeVal);
//         console.log(current)
//         current = current.next
//         console.log(current)
//     }
// }

function addTwoNumbers(l1, l2) {
    let dummy = new ListNode(0); // starting dummy node
    let current = dummy;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry > 0) {
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;

        let total = val1 + val2 + carry;
        carry = Math.floor(total / 10);
        current.next = new ListNode(total % 10);
        // console.log(current.next)s
        current = current.next;
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return dummy.next;
}
let l4 = new addTwoNumbers(l1, l2)
console.log(l4)