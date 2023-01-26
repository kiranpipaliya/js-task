const selectionSort = (arr) => {
  const arr1 = arr;
  debugger;
  for (let i = 0; i < arr1.length - 1; i++) {
    let MinIndex = i;
    for (let j = i + 1; j < arr1.length; j++) {
      if (arr1[j] < arr1[MinIndex]) {
        MinIndex = j;
      }
    }
    let tempt = arr[i];
    arr1[i] = arr1[MinIndex];
    arr1[MinIndex] = tempt;
  }
  return arr1;
};

console.log(selectionSort([7, 5, 3, 2, 6, 8]));
