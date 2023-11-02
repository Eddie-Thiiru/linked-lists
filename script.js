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
      node.value = value;
      node.next = null;
      listSize += 1;
    } else {
      let current = node;

      // loop to the end of the list
      while (current.next !== null) {
        current = current.next;
      }

      current.next = { value: value };
      current.next.next = null;
      listSize += 1;
    }
  };

  const prepend = (value) => {
    // This previous code would not prepend new value; node = { value: value, next: node };

    // The below URL gives a solution
    // https://stackoverflow.com/questions/74500514/why-is-my-linked-list-object-in-javascript-not-updating-when-i-try-to-add-a-node
    let temp = { ...node };
    node.next = temp;
    node.value = value;
    listSize += 1;
  };

  const size = () => {
    return listSize;
  };

  const head = () => {
    return node.value;
  };

  const tail = () => {
    let current = node;

    while (current.next !== null) current = current.next;

    return current;
  };

  const at = (index) => {
    let current = node;

    while (index > 0) {
      current = current.next;
      index -= 1;
    }

    return current;
  };

  const pop = () => {
    let current = node;

    while (current.next !== null) {
      if (current.next.next === null) {
        current.next = null;
        listSize -= 1;
        break;
      }

      current = current.next;
    }
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

      current = current.next;
      index += 1;
    }

    return null;
  };

  const toString = () => {
    let current = node;
    let str = "";

    while (current) {
      if (current.next !== null) {
        str += `(${current.value}) -> `;
      } else {
        str += `(${current.value}) -> null`;
      }

      current = current.next;
    }

    console.log(str);
  };

  return {
    node,
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

// Adds a new node to the end of the list
myLinkedList.append(100);
myLinkedList.append(200);
myLinkedList.append(300);

// Adds a new node containing value to the start of the list
myLinkedList.prepend(50);

// Returns the total number of nodes in the list
myLinkedList.size();

// Returns the first node in the list
myLinkedList.head();

// Returns the last node in the list
myLinkedList.tail();

// Returns the node at the given index
myLinkedList.at(2);

// Removes the last node from the list
myLinkedList.pop();

// Returns true if value is in the list
myLinkedList.contains(100);

// Returns the index of the node containing value, or null if not found
myLinkedList.find(50);

// Prints list objects as a string
myLinkedList.toString();
