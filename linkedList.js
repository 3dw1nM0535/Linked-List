//Linked list implementation using the object constructor method

//Node class for adding nodes to elements of linked list. Consist of two properties: element which
//stores node's data and next which stores link to the next node
function Node(element) {
  this.element = element;
  this.next = null;
}

//Linked list class provide functionality for a linked list: inserting new nodes, removing nodes, finding particular data value in a list
//and also a constructor for creating new linked list
function LList() {
  this.head = new Node("head");
  this.find = find;
  this.insert = insert;
  this.remove = remove;
  this.display = display;
}

//inserting node to linked list
//find() the after node or before node where to insert the node
function find(item) {
  var currNode = this.head;
  while(currNode.element != item) {
    currNode = currNode.next;
  }
  return currNode;
}

//insert()
function insert(newElement, item) {
  var newNode = new Node(newElement);
  var current = this.find(item);
  newNode.next = current.next;
  current.next = newNode;
}

//display() elements of a linked list
function display() {
  var currNode = this.head;
  while(!(currNode == null)) {
    console.log(currNode.element);
    currNode = currNode.next;
  }
}