Function.prototype.Praveenbhai=function(){
    let orginalArray=this;
    let newArr=[];
    for(let i=0;i<orginalArray.length;i++){
        let new_Val=cb(orginalArray[i],orginalArray);
        newArr.push(newVal);
    }
    return newArr;
}
let newArr=Array.mymap((e,i,a)=>{
    console.log(e,i,a);
    return e*e*e;
})
console.log(newArr)
console.log(arr)


let newArr1 = arr1.mymap((e,i,a)=>{
    return Math.sqrt(e);
})

console.log(newArr1);