// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function oddOrEven(odd) {
  if (odd % 2 !== 0) {
    const oddResult = odd * 2;
    return `The number you entered is odd =${odd} and Multiplication by 2 is: 
      ${oddResult}`;
  } else {
    const evenResult = odd / 2;

    return `The number is even ${odd},and divide  by 2 is:${evenResult}`;
  }
}

const result = oddOrEven(8);
console.log(result);
