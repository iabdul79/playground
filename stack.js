function Node() {
  this.data = null;
  this.nextPointer = null;
}

function StackDataType() {
  this.head = null;
}

StackDataType.prototype.push = function (element) {
  const newNode = new Node();
  newNode.data = element;
  if (this.head !== null) {
    newNode.nextPointer = this.head;
  } else {
    newNode.nextPointer = null;
  }
  this.head = newNode;
}

StackDataType.prototype.pop = function () {
  const popElem = this.head;
  if (popElem !== null) {
    this.head = this.head.nextPointer;
  }
  popElem.nextPointer = null;
  return popElem.data;
}

StackDataType.prototype.stackTop = function () {
  return this.head.data;
}