function NewMap(arr, cb) {
  const res = [];
  i = 0;
  while (i < arr.length) {
    res.push(cb(arr[i], i, arr));
    i += 1;
  }
  return res;
}

const arr = [1, 2, 3, 4];
let mul = 1;

const result = arr.map((num) => {
  num -= 1;
  return num;
});

NewMap(arr, (num) => {
  mul *= num;
});
console.log(mul);
console.log(result);
