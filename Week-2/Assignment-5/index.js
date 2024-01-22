function binarySearchPosition(numbers, target) {
  // your code here
  //step1.先整理array
  numbers = numbers.sort(function (a, b) {
    return a - b;
  });

  //step2.binary search start=>二分逼近法?
  let start = 0,
    end = numbers.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2); //從中間開始逼近
    if (numbers[mid] === target) {
      return mid;
    } else if (numbers[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

console.log(binarySearchPosition([1, 2, 5, 6, 7], 1)); // should print 0
console.log(binarySearchPosition([1, 2, 5, 6, 7], 6)); // should print 3
