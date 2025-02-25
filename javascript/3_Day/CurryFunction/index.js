// !important

function add(num) {
  if (num == undefined) return 0;

  return function fun(n) {
    if (!n) return num;
    num += n;

    return fun;
  };
}
