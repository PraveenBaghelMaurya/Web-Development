function add(a,b){
    setTimeout(()=>{
        console.log("sum of Two number is : ",a+b);
    },2000)
}
add(56,2)
console.log("i'm Second Line");

function sub(a,b){
    setTimeout(()=>{
        console.log("sub of Two number is : ",a-b);
    },2000)
}
sub(56,2)
console.log("i'm Fourth Line");
