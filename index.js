let myObj = {
  id: 2,
  printId() {
    // このthisは、この関数が定義されているオブジェクトを指している。
    console.log(this.id);
  }
}

myObj.printId();

// thisの役割
// オブジェクトを参照する時に使用される