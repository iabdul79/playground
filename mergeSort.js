function mergeSort(givenArray) {
    if (givenArray.length === 1) {
      return givenArray;
    }
    let mean = parseInt((givenArray.length) / 2);
    let s1 = givenArray.filter((val, idx) => idx < mean);
    let s2 = givenArray.filter((val, idx) => idx >= mean);
    s1 = mergeSort(s1);
    s2 = mergeSort(s2);
    return merge(s1, s2);
  }
  
  function merge(list1, list2) {
    let head1 = 0;
    let head2 = 0;
    let resultIdx = 0;
    let resultantList = [];
    while (head1 < list1.length && head2 < list2.length) {
      if (list1[head1] < list2[head2]) {
        resultantList[resultIdx] = list1[head1];
        head1++;
      } else {
        resultantList[resultIdx] = list2[head2];
        head2++;
      }
      resultIdx++;
    }
    while (head1 === list1.length && head2 < list2.length) {
      resultantList[resultIdx] = list2[head2];
      head2++;
      resultIdx++;
    }
    while (head2 === list2.length && head1 < list1.length) {
      resultantList[resultIdx] = list1[head1];
      head1++;
      resultIdx++;
    }
    return resultantList;
  }