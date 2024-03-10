class CircularBuffer {
  constructor(arraySize) {
    this.array = new Array(arraySize);
    this.arrayLength = arraySize - 1;
    this.writeIndex = 0;
    this.readIndex = 0;
  }

  add(value) {
    console.log("add()");

    this.array[this.writeIndex] = value;
    this.writeIndex++;
  }

  remove() {
    console.log("remove()");

    const response = this.array[this.readIndex];
    this.readIndex++;
    return response;
  }

  peek() {
    console.log("peek()");

    return this.array[this.readIndex];
  }

  isEmpty() {
    console.log("isEmpty()");

    return this.array.every((element) => element === undefined);
  }

  isFull() {
    console.log("isFull()");

    return (this.writeIndex + 1) % this.arrayLength === this.readIndex;
  }

  size() {
    console.log("size()");

    return this.writeIndex - this.readIndex;
  }

  capacity() {
    console.log("capacity()");

  }
}
