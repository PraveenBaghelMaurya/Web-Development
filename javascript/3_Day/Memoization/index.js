function memoize(fn) {
    let cache = {};  // 🔹 Step 1: Create a cache (empty object), In which values are store in key va;ue format {input:output}
    return function (n) { 
        if (cache[n]) return cache[n]; // 🔹 Step 2: Check if result is already in cache
        console.log("Running Factorial Finding Code"); // Just to see when the calculation happens
        let ans = fn(n);  // 🔹 Step 3: Compute factorial using the provided function
        return cache[n] = ans;  // 🔹 Step 4: Store the result in cache and return it
    }
}
let fact=memoize(function factorial(n){
    let result=1;
    for(let i=1;i<=n;i++){
        result*=i;
    }
    return result;
});
console.log(fact(5))//excute normally
console.log(fact(5))// return by cache
console.log(fact(15))//excute normally
