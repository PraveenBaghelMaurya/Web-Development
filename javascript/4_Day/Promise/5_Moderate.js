let myPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(2)
    })
})
myPromise.then((d)=>{
    return d*2  //4 => d store 2 then 2*2=4
})
.then((d)=>{
    return d*2  //8
})
.then((d)=>{
    return d*2  //16
})
.then((d)=>{
    console.log(d)  //Print 16
})