const Node = () => {
  let list = {
    value: null,
    next: null,
  };

  return list;
};

const LinkedList = () => {
  let list = Node();
  let listSize = 0;

  const append = (value) => {
    if (list.value === null) {
      list = { value: value };
      list.next = null;
      listSize += 1;
    } else {
      let current = list;

      while (current.next !== null) {
        current = current.next;
      }
      current.next = { value: value };
      current.next.next = null;
      listSize += 1;
    }
  };

  const prepend = (value) => {
    list = { value: value, next: list };
    listSize += 1;
  };

  const size = () => {
    return listSize;
  };

  const head = () => {
    return list;
  };

  const tail = () => {
    let current = list.next;

    while (current.next !== null) {
      current = current.next;
    }

    return current;
  };

  const at = (index) => {
    let current = list;
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
    let current = list;

    while (current.next !== lastNode) {
      current = current.next;
    }
    current.next = null;
    listSize--;
  };

  const contains = (value) => {
    let current = list;

    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }

    return false;
  };

  const find = (value) => {
    let current = list;
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
    let current = list;

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
