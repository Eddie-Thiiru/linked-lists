const Node = () => {
  let value = null;
  let next = null;

  return { value, next };
};

const LinkedList = () => {
  let node = Node();
  let listSize = 0;

  const append = (value) => {
    if (node.value === null) {
      node = { value: value };
      node.next = null;
      listSize += 1;
    } else {
      let current = node;

      while (current.next !== null) {
        current = current.next;
      }
      current.next = { value: value };
      current.next.next = null;
      listSize += 1;
    }
  };

  const prepend = (value) => {
    node = { value: value, next: node };
    listSize += 1;
  };

  const size = () => {
    return listSize;
  };

  const head = () => {
    return node;
  };

  const tail = () => {
    let current = node.next;

    while (current.next !== null) {
      current = current.next;
    }

    return current;
  };

  const at = (index) => {
    let current = node;
    let position = 0;

    while (current) {
      if (index === position) {
        break;
      } else {
        current = current.next;
      }
      position += 1;
    }

    return current;
  };

  const pop = () => {
    let lastNode = tail();
    let current = node;

    while (current.next !== lastNode) {
      current = current.next;
    }
    current.next = null;
    listSize--;
  };

  const contains = (value) => {
    let current = node;

    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }

    return false;
  };

  const find = (value) => {
    let current = node;
    let index = 0;

    while (current) {
      if (current.value === value) {
        return index;
      }

      index += 1;
      current = current.next;
    }

    return null;
  };

  const toString = () => {
    let string = "";
    let current = node;

    while (current) {
      string += `${current.value.toString()} next: `;
      current = current.next;
    }
    string += "null";
    console.log(string);
  };

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
  };
};

const myLinkedList = LinkedList();

// Updates default head node and adds a value to initialize the list
myLinkedList.append(100);

// Adds a new node containing value to the start of the list
myLinkedList.prepend(200);

// Adds a new node to the end of the list
myLinkedList.append(350);

// Adds a new node containing value to the start of the list
myLinkedList.prepend(600);

// Returns the total number of nodes in the list
myLinkedList.size();

// Returns the first node in the list
myLinkedList.head();

// Returns the last node in the list
myLinkedList.tail();

// Returns the node at the given index
myLinkedList.at(1);

// Removes the last node from the list
myLinkedList.pop();

// Returns true if value is in the list
myLinkedList.contains(600);

// Returns the index of the node containing value, or null if not found
myLinkedList.find(100);

// Prints list objects as a string
myLinkedList.toString();
