function findKfrmLst(lList, k) {
    if (lList.head === null) {
      return null
    }
    let p1 = lList.head;
    let p2 = lList.head;
    while (p2 !== null && k > 0) {
      p2 = p2.nextPointer;
      k--;
    }
    while (p1 !== null && p2 !== null) {
      p1 = p1.nextPointer;
      p2 = p2.nextPointer;
    }
    return p1;
  }