function count(input) {
  // your code here
  var output = {};
  for (let i = 0; i < input.length; i++) {
    if (!Object.keys(output).includes(input[i])) {
      let count = 1;
      output[input[i]] = count;
    } else {
      output[input[i]] += 1;
    }
  }
  return output;
}
let input1 = ["a", "b", "c", "a", "c", "a", "x"];
console.log(count(input1));
// should print {a:3, b:1, c:2, x:1}

function groupByKey(input) {
  // your code here
  let output = {};
  for (let i = 0; i < input.length; i++) {
    if (!Object.keys(output).includes(input[i].key)) {
      output[input[i].key] = input[i].value;
    } else {
      output[input[i].key] += input[i].value;
    }
  }
  return output;
}

let input2 = [
  { key: "a", value: 3 },
  { key: "b", value: 1 },
  { key: "c", value: 2 },
  { key: "a", value: 3 },
  { key: "c", value: 5 },
];

console.log(groupByKey(input2));
// should print {a:6, b:1, c:7}
