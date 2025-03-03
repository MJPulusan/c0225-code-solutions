// interface Numbers {
//   total: number;
//   odds: number;
//   evens: number;
//   range: [];
//   average: number;
// }

function getRangeReport(start: number, end: number) {
  const startNum = 1;
  const endNum = 10;
  const sum = startNum + endNum;

  const evens = [];
  for (let i = 0; i < endNum; i++) {
    evens.push(i);
    i++;
  }
  return evens;
  return sum;

  const odd = [];
  for (let i = 0; i < endNum; i++) {
    odd.push(i);
    i--;
  }
  return odd;
}
