class CircularBuffer {
  constructor(arraySize, writeIndex1, readIndex1) {
    const array = [arraySize];
    //const arrayLength = this.array.length;
    const writeIndex = writeIndex1;
    const readIndex = readIndex1;
  }

  add() {
    console.log("add()");
  }

  remove() {
    console.log("remove");
  }

  peek() {
    console.log("peek()");
  }

  isEmpty() {
    console.log("isEmpty()");
  }

  isFull() {
    console.log("isFull()");
  }

  size() {
    console.log("size()");
  }

  capacity() {
    console.log("capacity()");
  }
}
