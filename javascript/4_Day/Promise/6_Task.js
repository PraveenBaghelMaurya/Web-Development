let p = new Promise((res, rej) => {
  res("I'm frist Promise");
});

p.then((data) => {
  console.log(data);
  return new Promise((res, rej) => {
    res("I'm Second Promise");
  });
})
  .then((data) => {
    console.log(data);

    return new Promise((res, rej) => {
      res("I'm Third Promise");
    });
  })
  .then((data) => {
    console.log(data);
  });
