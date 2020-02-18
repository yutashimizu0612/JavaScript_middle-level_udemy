let myObj = {
  id: 2,
  printId() {
    console.log(this.id);
  }
}

myObj.printId();