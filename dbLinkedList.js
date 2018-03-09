function Node() {
  this.data = null;
  this.nextPointer = null;
  this.prvsPointer = null;
}

function DbleLinkedList() {
  this.head = new Node();
  this.head.nextPointer =this.tail;
  this.tail = new Node();
  this.tail.prvsPointer = this.head;
}

DbleLinkedList.prototype.firstElem = function () {
  return this.head.data;
}

DbleLinkedList.prototype.lastElm = function () {
  return this.tail.data;
}

DbleLinkedList.prototype.listSzie = function () {
  let counter = 0;
  let node = this.head;
  while (node !== null) {
    counter++;
    node = node.nextPointer;
  }
  return counter;
}

DbleLinkedList.prototype.insertFirst = function (element) {
  const newNode = new Node();
  newNode.data = element;
  newNode.prvsPointer = this.head;
  if (this.head.nextPointer === null) {
    this.tail.prvsPointer = newNode;
    newNode.nextPointer = this.tail;
  } else {
    newNode.nextPointer = this.head.nextPointer;
  }
  this.head.nextPointer = newNode;
}

DbleLinkedList.prototype.insertLast = function (element) {
  const newNode = new Node();
  newNode.data = element;
  newNode.nextPointer = this.tail;
  if (this.tail.prvsPointer === null) {
    this.head.nextPointer = newNode;
    newNode.prvsPointer = this.head
  } else {
    newNode.prvsPointer = this.tail.prvsPointer;
  }
  this.tail.prvsPointer = newNode;
}

DbleLinkedList.prototype.deleteFirst = function () {
  if (this.head.nextPointer !== this.tail) {
    const nxtNode = this.head.nextPointer.nextPointer;
    nxtNode.prvsPointer = this.head;
    this.head.nextPointer = nxtNode;
  } else {
    this.head.nextPointer = this.tail;
    this.tail.prvsPointer = this.head;
  }
}

DbleLinkedList.prototype.deleteLast = function () {
  if (this.tail.prvsPointer !== this.head) {
    const prvNode = this.tail.prvsPointer.prvsPointer;
    prvNode.nextPointer = this.tail;
    this.tail.prvsPointer = prvNode;
  } else {
    this.head.nextPointer = this.tail;
    this.tail.prvsPointer = this.head;
  }
}