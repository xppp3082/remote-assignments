function delayedResultPromise(n1, n2, delayTime) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const result = n1 + n2;
      resolve(result);
      reject("excute fail");
    }, delayTime);
  }).then(console.log);
}

async function main() {
  const result1 = await delayedResultPromise(4, 5, 3000);
  //   console.log(result1);

  const result2 = await delayedResultPromise(-5, 10, 2000);
  //   console.log(result2);
}

main();
