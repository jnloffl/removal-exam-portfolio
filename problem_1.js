const assert = require('node:assert'); // Do not touch this

/* 
 * You'll earn points for each test your function passes. 
 * There are 15 tests total: 5 that you can see and work with, 
 * plus 10 hidden tests that I'll use to evaluate your final submission.
 */

/* 
 * To test your function just run this file using one of the following:
 * - the F5 (varies dependinng on your config)
 * - Run>Start Debugging
 * - running node problem_2.js on the terminal
 */
function isValidParentheses(str) {

  // Solution using a stack data structure
  const stack = [];
  
  // Mapping of closing brackets to their corresponding opening brackets
  const bracketPairs = {
    ')': '(',
    ']': '[',
    '}': '{'
  };
  
  // Iterate through each character in the string
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    
    // If it's an opening bracket, push to stack
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    }
    // If it's a closing bracket
    else if (char === ')' || char === ']' || char === '}') {
      // If stack is empty, no matching opening bracket
      if (stack.length === 0) {
        return false;
      }
      // Pop the top of the stack and check if it matches
      const top = stack.pop();
      if (top !== bracketPairs[char]) {
        return false;
      }
    }
    // Ignore any other characters (though problem says only brackets)
  }
  
  // Valid only if stack is empty (all brackets matched)
  return stack.length === 0;
}

/* 
 * +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * Ignore everything under this part as this is only to help you asses if what you built is accurate.
 * DO NOT MODIFY ANYTHING UNDER THIS COMMENT, ANY MODIFICATION COULD RESULT WITH THE INVALIDATION OF YOUR
 * SUBMISSION.
 * +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 */

// Helper to run tests
function runTest(id, input, expected) {
  try {
    const result = isValidParentheses(input);
    assert.strictEqual(result, expected);
    console.log(`Test ${id} Passed: "${input}" => ${expected}`);
  } catch (err) {
    console.error(`Test ${id} Failed: "${input}" | Expected ${expected} but got ${!expected}`);
  }
}

console.log("Starting Parentheses Validation Tests...\n");
// --- 15 COMPREHENSIVE TEST CASES ---

// Basic Valid Cases
runTest(1, "()", true);
runTest(2, "[]", true);
runTest(3, "{}", true);

// Combined Valid Cases
runTest(4, "()[]{}", true);
runTest(5, "{[()]}", true);

console.log("\nTests Completed.");

// ADDITIONAL TEST CASES (for my own verification - not required by exam but helpful)
// These are just for you to manually check. They won't interfere with the test runner.
console.log("\n--- Additional Manual Tests ---");
console.log('isValidParentheses("(]") =>', isValidParentheses("(]"));        // false
console.log('isValidParentheses("([)]") =>', isValidParentheses("([)]"));    // false
console.log('isValidParentheses("{[]}") =>', isValidParentheses("{[]}"));    // true
console.log('isValidParentheses("(") =>', isValidParentheses("("));          // false
console.log('isValidParentheses("") =>', isValidParentheses(""));            // true