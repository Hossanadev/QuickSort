function qsort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let [pivot, ...rest] = arr;
  let left = [];
  let right = [];
  rest.forEach((el) => {
    return el < pivot ? left.push(el) : right.push(el);
  });
  return qsort(left).concat(pivot).concat(qsort(right));
}
console.log(qsort([7, 2, 3, 8, 5, 11, 3, 22, 6]));
