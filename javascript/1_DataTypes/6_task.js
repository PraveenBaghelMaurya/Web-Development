let url = "https://www.codingblocks.com/mocie/dsa.mp4";
let a = url.split("/");


var company=a[2];
var category=a[3];
var content=a[4];


let obj={};

if(!obj[company]){
    obj[company]={};
}


if(!obj[company][category]){
    obj[company][category]=[]
    
}
obj[company][category].push(content)
console.log(obj)

// let x=[];
// x.push('Hello');
// x.unshift("World");
// console.log(x)
// X.pop("Hello")