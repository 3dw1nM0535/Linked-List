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