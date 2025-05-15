let myPromises=new Promise ((res,rej)=>{
    res("Solve")
})
myPromises.then((resol,rejec)=>{

    resol("Second Promise resolved")
    // rejec("Second Promise is not resolved")
})
// .rejec((data)=>{
//     console.log(data)
// })