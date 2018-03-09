function Node() {
    this.data = null;
    this.nextPointer = null;
  }
  
  function QueueDataType() {
      this.head = null;
      this.tail = null;
    }
    
    QueueDataType.prototype.enqueue = function (element) {
      const newNode = new Node();
      newNode.data = element;
      newNode.nextPointer = null;
      if (this.tail === null) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.nextPointer = this.tail;
        this.tail = newNode;
      }
    }
    
    QueueDataType.prototype.dequeue = function () {
      let dequeueEle = null;
      if (this.head !== null) {
        dequeueEle = this.head.data;
        this.head = this.head.nextPointer;
      }
      return dequeueEle;
    }
  
  module.exports = QueueDataType;