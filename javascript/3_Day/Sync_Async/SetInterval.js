let date = new Date(); //Date is whole library of time then you pic year, month, date, second etc

let formattedDate = date.toLocaleDateString(); // Get only the date
let formattedTime = date.toLocaleTimeString(); // Get only the time

function samay() {
  setInterval(() => {
    console.log("Standard Date:", formattedDate);
  }, 2000);
}
samay();
console.log("i'm Second Line");

function samay2() {
  setInterval(() => {
    console.log("Standard Time:", formattedTime);
  }, 2000);
}
samay2();
console.log("i'm Fourth Line");

// never end Programm