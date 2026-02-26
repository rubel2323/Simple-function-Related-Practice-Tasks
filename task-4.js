// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(zeros) {
  const zero = zeros.split("0").length - 1;
  return zero;
}

const digits = count_zero("11110");
console.log("The total zeros are -", digits);
