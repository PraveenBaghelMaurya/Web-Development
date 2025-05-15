// Promise chaning:-a Promise alway return a promise not any thing else

let p1 = new Promise((resolve, reject) => {
  resolve();
});
p1.then(() => {
  console.log("P1 Completed");
  return "P1 competed ho gaya bhai";
})
  .then((data) => {
    console.log(data);
    return "main 2nd promise hu , aur completed ho gaya";
  })
  .then((data2) => {
    console.log(data2);
    console.log("main 3rd promise hu , aur main bhi completed ho gaya");
  });
