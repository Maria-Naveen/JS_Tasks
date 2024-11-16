function ForEach(arr, cb) {
  let i = 0;
  while (i < arr.length) {
    cb(arr[i], i, arr);
    i += 1;
  }
}

const fruits = [10, 20, 30, 40];
let tot = 0;
ForEach(fruits, (fruit) => {
  tot += fruit;
});
console.log(tot);
