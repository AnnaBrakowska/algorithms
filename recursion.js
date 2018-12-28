//1. countdown
function countdown(num) {
  if (num <= 0) return 0;
  console.log(num);
  return countdown(num - 1);
}

//2. sum range

function sumRange(num) {
  if (num <= 0) return 0;
  return num + sumRange(num - 1);
}

//3. factorial iteraterively

function factorial() {
  if (num <= 0) return 0;
  return num * factorial(num - 1);
}

const factorial = num => (num === 1 ? 1 : num * factorial(num - 1));

//4. recursion with helper method => collect odds from array

function collectOdds(arr) {
  let result = [];

  function inner(nums) {
    if (nums.length === 0) {
      return;
    }
    if (nums[0] % 2 !== 0) {
      result.push(nums[0]);
    }
    inner(nums.slice(1));
  }
  inner(arr);
  return result;
}

// 5. pure recursion => collect odds

function collectOddsPure(arr) {
  let result = [];
  if (arr.length < 0) {
    return result;
  }
  if (arr[0] % 2 !== 0) {
    result.push(arr[0]);
  }
  result = result.concat(collectOddsPure(arr.slice(1)));
  return result;
}

//6. pow

function pow(base, exp) {
  if (exp <= 1) {
    return base;
  }
  return base * pow(base, exp - 1);
}

//7. product of array

function product(arr) {
  if (arr.length <= 0) {
    return 0;
  }
  return arr[0] * product(arr.slice(1));
}

//8. recursiveRange
function recursiveRange(start, end) {
  if (start === end) {
    return start;
  }
  return start + recursiveRange(start + 1, end);
}

// FIBONACCI

//9. fib recursively

function fib(num) {
  if (num === 1) return 1;
  if (num === 0) return 0;
  return fib(num - 1) + fib(num - 2);
}

// 10. fast fib

function fastFib(a, b, n) {
  if (n) return smartFib(b, a + b, n - 1);
  return a;
}

//11. fib memoization

function fibMemo(num, memo) {
  memo = memo || {};

  if (memo[num]) return memo[num];
  if (num === 0) return 0;
  if (num <= 1) return 1;

  return (memo[num] = fibMemo(num - 1, memo) + fibMemo(num - 2, memo));
}

//12. reverse
function reverse(str) {
  let strRev = "";
  if (str.length <= 1) return str;
  strRev += str[str.length - 1];
  strRev = strRev.concat(reverse(str.substr(0, str.length - 1)));
  return strRev;
}

// Given a string, compute recursively a new string where all the lowercase 'x' chars have been moved to the end of the string.

function endX(str) {
  let pos = str.indexOf("x");
  return pos < 0
    ? str
    : str.substring(0, pos) + endX(str.substring(pos + 1)) + "x";
}

// endX("xxre") // "rexx"
// endX("xxhixx") // "hixxxx"
// endX("xhixhix") // "hihixxx"

function nestParen2(str) {
  if (str.length === 1 || str.length === 3) {
    return false;
  }
  if (str[0] !== "(") {
    return false;
  }
  if (str[str.length - 1] !== ")") {
    return false;
  }
  if (str.length === 2) {
    return true;
  }
  return nestParen2(str.slice(1, str.length - 1));
}
// console.log(nestParen2("(())"))
