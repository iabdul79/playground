function Node() {
    this.data = null;
    this.nextPointer = null;
  }
  
  function LinkedList() {
    this.head = null;
  }
  
  LinkedList.prototype.sizeOfList = function () {
    let count = 0;
    let node = this.head;
    while (node !== null) {
      count++;
      node = node.nextPointer;
    }
    return count;
  }
  
  LinkedList.prototype.insert = function (element, position, nextNode = this.head) {
    if (position === 0) {
      const newNode = new Node();
      newNode.data = element;
      newNode.nextPointer = this.head;
      this.head = newNode;
    } else if (position === 1) {
      const newNode = new Node();
      newNode.data = element;
      newNode.nextPointer = this.head;
      newNode.nextPointer = nextNode.nextPointer;
      nextNode.nextPointer = newNode;
    } else if (!position) {
      if (nextNode.nextPointer !== null) {
        return this.insert(element, null, nextNode.nextPointer);
      }
      const newNode = new Node();
      newNode.data = element;
      newNode.nextPointer = null;
      nextNode.nextPointer = newNode;
    } else {
      if (nextNode.nextPointer) {
        return this.insert(element, position - 1, nextNode.nextPointer);
      } else {
        console.log('Node doesn\'t exist');
      }
    }
  }
  
  LinkedList.prototype.delete = function (position, nextNode = this.head) {
    if (position === 0) {
      this.head = this.head.nextPointer;
    } else if (position === 1) {
      nextNode.nextPointer = nextNode.nextPointer.nextPointer;
    } else if (!position) {
      if (nextNode.nextPointer !== null) {
        return this.delete(null, nextNode.nextPointer);
      }
  
    }
  }