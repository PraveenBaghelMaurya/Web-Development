function assignment(resolve, reject) {
  let assignmentFinished = true;
  if (assignmentFinished) {
    return resolve("completed");
  } else {
    return reject("Not Completed");
  }
}
let MyPromise = new Promise((resolve, reject) => {
  //main part hai
  assignment(resolve, reject);
});

MyPromise.then(() => {
  console.log("ho gaya");
}).catch(() => {
  console.log("Not Compeleted");
});
