const LinkedList = () => {
  let list = Node();

  const append = (value) => {
    if (list.value === null) {
      list = { value: value };
      list.next = null;
    } else {
      list.next.next = { value: value };
      list.next.next.next = null;
    }
    console.log(list);
  };

  const prepend = (value) => {
    list = { value: value, next: list };
    console.log(list);
  };

  const size = () => {};

  const head = () => {
    console.log(list.key);
  };

  const tail = () => {};

  const at = (index) => {};

  const pop = () => {};

  const contains = (value) => {};

  const find = (value) => {};

  const toString = () => {};

  return { append, prepend, size, head };
};

const Node = () => {
  let list = {
    value: null,
    next: null,
  };

  return list;
};

const myLinkedList = LinkedList();

// Updates default head node and adds a value to initialize the list
myLinkedList.append(100);

// Adds a new node containing value to the start of the list
myLinkedList.prepend(200);

// Adds a new node to the end of the list
myLinkedList.append(300);

// Adds a new node containing value to the start of the list
myLinkedList.prepend(400);
