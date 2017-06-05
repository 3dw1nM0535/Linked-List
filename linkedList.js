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
  this.findPreviousNode = findPreviousNode;
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
  while(!(currNode.next == null)) {
    console.log(currNode.element);
    currNode = currNode.next;
  }
}

//test program
var cities = new LList();
cities.insert("Chicago", "head");
cities.insert("Nairobi", "Chicago");
cities.insert("New York", "Nairobi");
cities.display();

cities.remove("New York");

cities.display();

//remove() to remove node from linked list
//first findPreviousNode()
function findPreviousNode(item) {
  var currNode = this.head;
  while(!(currNode.next == null) && (currNode.next.element != item)) {
    currNode = currNode.next;
  }
  return currNode;
}

//now the remove() implementation
function remove(item) {
  var prevNode = this.findPreviousNode(item);
  if(!(prevNode.next == null)) {
    prevNode.next = prevNode.next.next;
  }
}