function partitionArndX(lList, xValue) {
    const xNode = findNode(lList.head, xValue);
    if (xNode === null) {
      return console.log(`${xValue} not found`);
    }
    let xNodeLeft = lList.head;
    let xNodeRight = xNode.nextPoiter;
    let nextNode = lList.head;
    while (nextNode !== null) {
      if(nextNode.data < xNode.data){
        
      }
      nextNode = nextNode.nextPoiter;
    }
  }
  
  function findNode(node, xValue) {
    if (node.data === xValue) {
      return node;
    } else if (node === null) {
      return null;
    } else {
      return findNode(node.nextPoiter, xValue);
    }
  }