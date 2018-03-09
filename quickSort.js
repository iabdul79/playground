function quickSort(givenArray, pviotPnt) {

}

function partition(givenArray, pviotPnt) {
  let ptr = 0;
  while (ptr < givenArray.length) {
    if (givenArray[ptr] > givenArray[pviotPnt]) {
      let temp = givenArray[ptr];
      givenArray[ptr] = givenArray[pviotPnt];
      givenArray[pviotPnt] = temp;
      pviotPnt = ptr;
    }
    ptr++;
  }
}