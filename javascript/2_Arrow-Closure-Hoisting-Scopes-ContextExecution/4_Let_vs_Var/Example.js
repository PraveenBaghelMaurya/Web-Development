function test() {
  if (true) {
    let x = 10; // change let to var and see
  }
  console.log(x); // ❌ Error
}
test();
