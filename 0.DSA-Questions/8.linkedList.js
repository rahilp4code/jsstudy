// function ListNode(val, next) {
//     this.val = (val === undefined ? 0 : val)
//     this.next = (next === undefined ? null : next)
// }

// function linkedList(arr) {
//     let list = new ListNode(arr[0]);
//     // console.log('first val of list:', list)
//     let selectedNode = list;
//     // console.log('first val of snode:', selectedNode)
//     for (let i = 1; i < arr.length; i++) {
//         selectedNode.next = new ListNode(arr[i]);
//         // console.log('second val of snode', selectedNode.next)
//         // console.log('second val of list', list.next)
//         selectedNode = selectedNode.next
//     }
//     return list
// }
// // console.log(linkedList([2, 4, 3]))
// let l1 = linkedList([2, 4, 3])
// let l2 = linkedList([5, 6, 4])

// Step 1: Initial node created
// list: {"val":2,"next":null}
// selectedNode: {"val":2,"next":null}

// Step 2.1: Adding node with value 4
// After creating selectedNode.next:
// selectedNode: {"val":2,"next":{"val":4,"next":null}}
// list: {"val":2,"next":{"val":4,"next":null}}
// After moving selectedNode to selectedNode.next:
// selectedNode: {"val":4,"next":null}
// list: {"val":2,"next":{"val":4,"next":null}}

// Step 2.2: Adding node with value 3
// After creating selectedNode.next:
// selectedNode: {"val":4,"next":{"val":3,"next":null}}
// list: {"val":2,"next":{"val":4,"next":{"val":3,"next":null}}}
// After moving selectedNode to selectedNode.next:
// selectedNode: {"val":3,"next":null}
// list: {"val":2,"next":{"val":4,"next":{"val":3,"next":null}}}


// function ListNode(val, next) {
//     this.val = val;
//     this.next = next || null;
// }

// function linkedList(arr) {
//     let list = new ListNode(arr[0]);
//     let selectedNode = list;

//     console.log("Step 1: Initial node created");
//     console.log("list:", JSON.stringify(list));
//     console.log("selectedNode:", JSON.stringify(selectedNode));

//     for (let i = 1; i < arr.length; i++) {
//         console.log(`\nStep 2.${i}: Adding node with value`, arr[i]);

//         selectedNode.next = new ListNode(arr[i]);
//         console.log("After creating selectedNode.next:");
//         console.log("selectedNode:", JSON.stringify(selectedNode));
//         console.log("list:", JSON.stringify(list));

//         selectedNode = selectedNode.next;
//         console.log("After moving selectedNode to selectedNode.next:");
//         console.log("selectedNode:", JSON.stringify(selectedNode));
//         console.log("list:", JSON.stringify(list));
//     }

//     return list;
// }

// linkedList([2, 4, 3]);

// var addTwoNumbers = function (l1, l2) {
//     let dummy = new ListNode(0); // starting dummy node
//     let current = dummy;
//     let carry = 0;

//     while (l1 !== null || l2 !== null || carry > 0) {
//         let val1 = l1 ? l1.val : 0;
//         let val2 = l2 ? l2.val : 0;

//         let total = val1 + val2 + carry;
//         carry = Math.floor(total / 10);
//         current.next = new ListNode(total % 10);
//         current = current.next;
//         if (l1) l1 = l1.next;
//         if (l2) l2 = l2.next;
//     }

//     return dummy.next;

// };
// console.log(addTwoNumbers(l1, l2))

// START
// Initial dummy: {"val":0,"next":null}
// ----------------------------------
// Step 1:
// l1: 2, l2: 5, carry-in: 0
// Total: 7, New Digit: 7, New Carry: 0
// Current List from dummy: {"val":0,"next":{"val":7,"next":null}}
// ----------------------------------
// Step 2:
// l1: 4, l2: 6, carry-in: 0
// Total: 10, New Digit: 0, New Carry: 1
// Current List from dummy: {"val":0,"next":{"val":7,"next":{"val":0,"next":null}}}
// ----------------------------------
// Step 3:
// l1: 3, l2: 4, carry-in: 1
// Total: 8, New Digit: 8, New Carry: 0
// Current List from dummy: {"val":0,"next":{"val":7,"next":{"val":0,"next":{"val":8,"next":null}}}}
// ----------------------------------
// FINAL RESULT (dummy.next): {"val":7,"next":{"val":0,"next":{"val":8,"next":null}}}

function listNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function linkedList(arr) {
    let list = new listNode(arr[0])
    let selectedNode = list

    for (let i = 1; i < arr.length; i++) {
        selectedNode.next = new listNode(arr[i])
        selectedNode = selectedNode.next
    }
    return list
}

let l1 = linkedList([9, 9, 9, 9, 9, 9, 9])
let l2 = linkedList([9, 9, 9, 9])
// console.log(l1)

function addTwoLL(l1, l2) {
    let dummy = new listNode(0)
    let helper = dummy
    let carry = 0

    while (l1 !== null || l2 !== null || carry > 0) {
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;
        let total = val1 + val2 + carry
        carry = Math.floor(total / 10)
        helper.next = new listNode(total % 10)
        helper = helper.next

        if (l1) l1 = l1.next
        if (l2) l2 = l2.next


    }

    return dummy.next

}

console.log(addTwoLL(l1, l2))
