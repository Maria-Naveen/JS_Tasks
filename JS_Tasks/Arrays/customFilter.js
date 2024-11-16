const arr = [2, 3, 4, 5, 6];
const even = arr.filter((num) => {
  return num % 2 == 0;
});

console.log(even);

function ourFilter(array, callback) {
  const returnArray = [];
  let i = 0;
  while (i < array.length) {
    if (callback(array[i], i, array)) {
      returnArray.push(array[i]);
    }
    i += 1;
  }
  return returnArray;
}

const res = ourFilter(arr, (num) => {
  return num % 2 != 0;
});
console.log(res);
