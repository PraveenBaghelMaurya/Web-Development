let arr=[1,2,3,4,5]

let newArr=arr.map((Element,indexedDB,arr)=>{
    return Element*Element; //return newArr
})

console.log(newArr)
console.log(`Orginal :`,arr)