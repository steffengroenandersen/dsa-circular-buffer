class CircularBuffer {
  constructor(capacity) {
    this.array = new Array(capacity);
    this.size = capacity;
    this.writeIndex = 0;
    this.readIndex = 0;
  }

  add(value) {
    console.log("add()");

    this.array[this.writeIndex] = value;

    console.log("writeIndex: " + this.writeIndex);
    console.log("getCapacity: " + this.getCapacity());

    if (this.writeIndex === this.getCapacity() - 1) {
      this.writeIndex = 0;
      return;
    }

    this.writeIndex++;
  }

  remove() {
    console.log("remove()");

    const response = this.array[this.readIndex];

    if(this.readIndex === this.getCapacity() -1){
      this.readIndex = 0;
    }
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

  getCapacity() {
    //console.log("capacity()");

    return this.size;
  }
}
