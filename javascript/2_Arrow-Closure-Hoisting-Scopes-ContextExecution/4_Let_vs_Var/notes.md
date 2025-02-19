Key Differences

Feature: Scope
var: Function Scope (Poori function me chalega)
let: Block Scope (Sirf {} ke andar chalega)

Feature: Hoisting
var: undefined ke sath hoist hota hai
let: Hoist hota hai par initialize nahi hota (Error dega)

Feature: Redeclaration
var: Ek hi scope me dobara declare kar sakte hain
let: ❌ Same scope me dobara declare nahi kar sakte

Feature: Use Case
var: Old JavaScript code me use hota tha
let: ✅ Naya aur better option hai
---------------------------------------------Hoist Difference-----------------------------------------------------
Difference between let and var

1. let hoist nhi hoga, var hoga
   ReferenceError: Cannot access 'a' before initialization
   console.log(x); // Error dega
   let x = 20;

console.log(x); // Error Nahi dega
var x = 20;

2. Scope alag hote hai let and var ke
   2.1 Let ka scope hota hai lexical scope/block scope
   2.2 Var ka scope hota hai functional
