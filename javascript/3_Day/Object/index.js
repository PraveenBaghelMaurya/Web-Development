function sum(a,b){
    return a+b;
}
let obj={
    a:1,
    b:true,
    c:sum
}
console.log(obj.a);
console.log(obj.b);
console.log(obj.c(10,20));