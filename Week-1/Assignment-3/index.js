function countAandB(input) {
  let count = 0;
  let target = ["a", "b"];
  for (var i = 0; i < input.length; i++) {
    if (target.includes(input[i])) {
      count++;
    }
  }
  return count;
}
// function toNumber(input) {
//   const result = input.map((char) => {
//     if (char === "a") return 1;
//     if (char === "b") return 2;
//     if (char === "c") return 3;
//     if (char === "d") return 4;
//     if (char === "e") return 5;
//     return;
//   });
//   return result;
// }
function toNumber(input) {
  let array1 = [];
  for (var i = 0; i < input.length; i++) {
    const charVal = input[i].toLowerCase().charCodeAt(0) - 96;
    array1.push(charVal);
  }
  return array1;
}

let input1 = ["a", "b", "c", "a", "c", "a", "c"];
console.log(countAandB(input1));
console.log(toNumber(input1));

let input2 = ["e", "d", "c", "d", "e"];
console.log(countAandB(input2));
console.log(toNumber(input2));
