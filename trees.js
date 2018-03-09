const QueueDataType = import('./queues');

function TreeNode(data) {
  this.data = data;
  this.parent = null;
  this.children = [];
}

function Tree(data) {
  const node = new TreeNode(data);
  this._root = node;
}

Tree.prototype.traverseBF = function (callBack) {
  const queue = new QueueDataType();
  queue.enqueue(this._root);
  let currentNode = queue.dequeue();
  while (currentNode) {
    for (let i = 0; i < currentNode.children.length - 1; i++) {
      queue.enqueue(currentNode.children[i]);
    }
    callBack(currentNode);
    currentNode = queue.dequeue();
  }
}

Tree.prototype.contain = function (elem) {
  let foundNode = null;
  this.traverseBF(function (node) {
    if (elem === node.data) {
      foundNode = node;
    }
  });
  return foundNode;
}

Tree.prototype.add = function (data, dataAt) {
  const newNode = new TreeNode(data);
  const parent = this.contain(dataAt);
  if (parent) {
    newNode.parent = parent;
    parent.children.push(newNode)
  } else {
    console.log('Node-At not found');
  }
}

Tree.prototype.remove = function (dataAt) {
  const toRmvNode = this.contain(dataAt);
  if (toRmvNode) {
    const idx = toRmvNode.parent.children.findIndex(node => node.data === toRmvNode.data);
    toRmvNode.parent.children.splice(idx, 1);
  } else {
    console.log('Node-At not found');
  }
}