let arr = [1, 2, 3, 4, 5];

let newArr = arr.filter((e, i, a) => {
  if (e % 2 == 0) return true;
  return false;
});

console.log(`new Arr :`, newArr);
console.log(`Orginal :`, arr);
