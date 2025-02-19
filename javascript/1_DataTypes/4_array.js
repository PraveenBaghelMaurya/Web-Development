// let arr=[1,2,3,4,5];

// for (let i = 0; i < arr.length; i++) {
//    console.log (arr[i]);
    
// }
// arr[10]="Hello"
// console.log(arr[10]);

// for(const e of arr){
//     console.log(e)
// }



// hetrogency example
let mixedArray = [
    42,                    // Number
    "Hello",               // String
    true,                  // Boolean
    { name: "John" },      // Object
    [1, 2, 3],             // Array
    function() { return "I'm a function"; }, // Function
    null,                  // Null
    undefined,             // Undefined
    Symbol("symbol"),      // Symbol
    BigInt(9007199254740991n) // BigInt
];

console.log(mixedArray);
console.log(mixedArray[5]()); // Calling the function inside the array
