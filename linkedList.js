function LinkedList(val = null, head = null) {
  this.val = val;
  this.head = head;
}

LinkedList.prototype.add = function(val) {
  let current = this;
  if (current.val == null && current.head == null) {
    current.val = val;
    current.head = null;
  } else {
    while (current.head) {
      current = current.head;
    }
    current.head = new LinkedList(val, null);
  }
}

LinkedList.prototype.remove = function(val) {
  if (this.val == val) {
    this.val = this.head.val;
    this.head = this.head.head;
  }
  if (this.head.val === val) {
    this.head = this.head.head;
    return;
  }
  let current = this.head;
  let prevNode = null;
  while (current && current.val !== val) {
    prevNode = current;
    current = current.head;
  }
  if (current) {
    prevNode.head = current.head;
  }
}

LinkedList.prototype.print = function() {
  let node = this;
  let nodeValue = '';
  while(node) {
    nodeValue += (nodeValue != '' ? ', ' : '') + node.val;
    node = node.head;
  }
  console.log(`LinkedList {${nodeValue}}`);
}

let list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.print();
list.remove(1);
list.print();
list.remove(2);
list.remove(4);
list.print();
