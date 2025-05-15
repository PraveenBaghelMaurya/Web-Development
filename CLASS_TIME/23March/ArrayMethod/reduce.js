let arr = [10, 20, 30, 40, 50];

let newArr = arr.reduce((accumulator, element) => {
  return accumulator + element;
});

console.log(newArr);

let SecondArr = arr.reduce((accumulator, element, indx, arr) => {
  return accumulator + element;
}, );// 2 is inital value of accumulator

console.log("Second Part : ",SecondArr);
