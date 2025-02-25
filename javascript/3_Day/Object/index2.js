function bank() {
  let amount = 0;
  function deposite(n) {
    return (amount += n);
  }
  function withdrawl(n) {
    return (amount -= n);
  }
  function show() {
    return amount;
  }
  return { deposite, withdrawl, show };
}

let banker = bank(); //It is import to make object/refernce of function to called a it's sub function
console.log(" amount : \t", banker.show());

console.log("deposite amount : \t", banker.deposite(100000));
console.log(banker.show());

console.log("withdrwal amount : \t", banker.withdrawl(90000));
console.log(banker.show());
