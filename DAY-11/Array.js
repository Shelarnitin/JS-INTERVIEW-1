/*************isPalindrome ********************/

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function isPalindrome(head) {
    if (!head || !head.next) return true;

    // Step 1: Find middle (slow & fast pointers)
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Step 2: Reverse second half
    let prev = null;
    while (slow) {
        let nextTemp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = nextTemp;
    }

    // Step 3: Compare first and second halves
    let left = head;
    let right = prev;

    while (right) {
        if (left.val !== right.val) {
            return false;
        }
        left = left.next;
        right = right.next;
    }

    return true;
}

console.log("Test Case 1:", isPalindrome(createList([1, 2, 3, 2, 1])));
console.log("Test Case 2:", isPalindrome(createList([1, 2, 3, 4])));