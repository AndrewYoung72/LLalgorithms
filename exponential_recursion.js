//Recursion
function rPower(base, exponent) {
  if (exponent === 0) {
    return 1;
  }
  return base * rPower(base, exponent - 1);
}

//small problem === base case
//factorial 20
// factorial 0 is 1

function factorial(index) {
  if (index === 0) {
    return 1;
  }
  return index * factorial(index - 1);
}

function fibonacci(N) {
  if (N === 0 || N === 1) {
    return N;
  }
  return fibonacci(N - 1) + fibonacci(N - 2);
}

// Swapping algorithm

function swapElements(array, leftIndex, rightIndex) {
  const temp = array[leftIndex];
  array[leftIndex] = array[rightIndex];
  array[rightIndex] = temp;
  return array;
}



// Partitioning

function partition(arrayPartition, left, right) {
  let leftPointer = left;
  let rightPointer = right;
  let pivot = arrayPartition[Math.floor((right + left) / 2)];
  //let pivot = arrayPartition[arrayPartition.length - 1 ]
  while (leftPointer <= rightPointer) {
    while (arrayPartition[leftPointer] < pivot) {
      leftPointer++;
    };
    while (arrayPartition[rightPointer] > pivot) {
      rightPointer--;
    };
    if (leftPointer <= rightPointer) {
      swapElements(arrayPartition, leftPointer, rightPointer);
      leftPointer++;
      rightPointer--;
    };
  };
  // console.log(arrayPartition, pivot, leftPointer, rightPointer);
  return leftPointer;
}

// Quick sort 

function quickSort(array, start = 0, end = array.length - 1) {
  let pivot;
  if(array.length > 1){
    pivot = partition(array, start, end);
    if (start < pivot - 1){//sort left
      quickSort(array, start, pivot - 1);
    };
    if (pivot < end) {//sort right
      quickSort(array, pivot, end);
    };
  }
  return array;
}




const testArray = [6, 2, 30, 45, 1, 5, 8, 98, 32, 21];

console.log(`Before sorting the array ${testArray}`);
console.table(testArray);
console.log(`After sorting the array`);
console.table(quickSort(testArray));