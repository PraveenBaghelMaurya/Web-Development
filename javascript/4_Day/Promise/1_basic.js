let myPromise = new Promise((resolve, reject) => {
  let assignmentFinished = true;
  if (assignmentFinished) {
    resolve("completed");
  } else {
    reject("Not Completed");
  }
});
myPromise.then((value)=>console.log("Mera Assignment ", value, " ho gaya"));
myPromise.catch((values)=>console.log("Mera Assignment ", values, " yet"));
myPromise.finally(()=>console.log("Thank you"));

