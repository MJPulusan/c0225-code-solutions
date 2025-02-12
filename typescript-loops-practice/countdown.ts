/* exported countdown */

function countdown(num: number): number[] {
  const numbers = [];
  let currentNum = 5;

  while (currentNum >= 0) {
    numbers.push(currentNum);
    currentNum--;
  }
  return numbers;

  // let numOfTen = 10;
  // while (numOfTen >= 0) {
  //   numbers.push(numOfTen);
  //   numOfTen--;
  // }
  // return numbers;
  // }

  const countdownToTen = [1, 2];
  for (let i of countdownToTen) {
    return i--;
  }
}
