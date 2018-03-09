function removeDublicates(lList) {
    debugger;
    let pointer = lList.head;
    let prvNode = lList.head;
    while (pointer !== null) {
      let runner = pointer.nextPointer;
      while (runner !== null) {
        if (pointer.data === runner.data) {
          prvNode.nextPointer = runner.nextPointer;
        } else {
          prvNode = runner;
        }
        runner = runner.nextPointer;
      }
      pointer = pointer.nextPointer;
    }
    return lList;
  }