// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(arr) {
  let array = 0;
  for (let ar of arr) {
    array = array + ar;
  }

  let arrSize = arr.length;
  let arraySum = array / arrSize;
  return arraySum;
}
const number = [2, 4, 5];
const arrayDigits = make_avg(number);
console.log("The digits is ", number, "and avg of digits is", arrayDigits);
