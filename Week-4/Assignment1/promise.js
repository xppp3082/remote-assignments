function delayedResultPromise(n1, n2, delayTime) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const result = n1 + n2;
      resolve(result);
      reject("excute fail");
    }, delayTime);
  });
}

delayedResultPromise(4, 5, 3000).then(console.log);
delayedResultPromise(-5, 10, 2000).then(console.log);
