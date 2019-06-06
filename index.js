// Code your solution here!

function printString(string) {
  console.log(string[0])
  let substring
  if (string.length > 1) {
    substring = string.substring(1, string.length)
    printString(substring)
  } else {
    return true
  }
}

function reverseString(string) {
  if (string.length > 1) {
    return reverseString(string.substring(1)) + string[0]
  } else {
    return string
  }
}

function isPalindrome(string) {
  let length = string.length
  if (length < 2) {
    return true
  } else if (string[length -1] === string[0]) {
    return isPalindrome(string.substring(1, length -1))
  } else {
    return false
  }
}

function addUpTo(array, index) {
  if (array.length -1 < index) {

  }
}
