const array1 = [1, 2, 3, 4, 5, 6, 7]

// we want to move an index to one index less than current
const moveUp = (arr, idx) => {
  let temp = '';
  temp = arr[idx - 1];
  arr[idx - 1] = arr[idx];
  arr[idx] = temp;
  return arr;
}

console.log(moveUp(array1, 6))