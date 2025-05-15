let myPromise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        let assignmentFinished = true;
    if (assignmentFinished) {
      resolve("completed");
    } else {
      reject("Not Completed");
    }
    },5000)
  });
  myPromise.then((value)=>console.log("Mera Assignment ", value, " ho gaya"));
  myPromise.catch((values)=>console.log("Mera Assignment ", values, " yet"));
  myPromise.finally(()=>console.log("Thank you"));
  
  