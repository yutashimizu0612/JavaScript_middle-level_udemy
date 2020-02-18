//============================================
// thisは、オブジェクトを参照する時に使用される。
//============================================
let myObj = {
  id: 2,
  printId() {
    // このthisは、この関数が定義されているオブジェクトを指している。
    console.log(this.id);
  }
}
myObj.printId(); // 2

//============================================
// thisは、呼ばれる場所で参照するオブジェクトが変わる。
//============================================
const sayFoo = function() {
  console.log(this['foo']);
}

// globalオブジェクトに格納された変数（ブラウザでは、windowオブジェクト）
// letやconstを省いて定義すると、globalオブジェクトの変数になる（バグの温床ゆえ、推奨されない）
foo = 'foo'

const mySecondObj = {
  foo: 'I`m in the object',
  sayFoo
}

// 【1】globalオブジェクトがthisとなるため、global変数であるfooが呼ばれる。
sayFoo();
// 【2】mySecondObjというオブジェクトの中で呼ばれるため、thisが指すのは、mySecondObj。
// よって、mySecondObj.fooが呼ばれる。
mySecondObj.sayFoo();



//===============================
// コンストラクタ関数
//===============================
function MyObj(id) {
  // このthisは、のちに生成されるインスタンス化したオブジェクトを指す。
  this.id = id;
}

// プロトタイプで関数を定義
MyObj.prototype.printId = function(id) {
  console.log(this.id);
}

// インスタンス化
// コンストラクタ関数内で定義されているthisは、インスタンスとして生成されたオブジェクトのことを指す。
const newInstance = new MyObj(22);
newInstance.printId();


//===============================
// ES6で導入されたclassでも同様
//===============================
class MyClass {
  constructor(id) {
    this.id = id;
  }

  printId(id) {
    console.log(this.id);
  }
}

// インスタンス化
// コンストラクタ関数内で定義されているthisは、インスタンスとして生成されたオブジェクトのことを指す。
const newInstanceVer2 = new MyClass(25);
newInstanceVer2.printId(); // 25


//===============================
// 関数が入れ子になった時のthis
//===============================
// 関数が入れ子になる場合、2つ目以降の入れ子関数内のthisは、globalオブジェクトを指す
const outer = {
  func1: function() {
    // このthisはfunc1を参照する
    console.log(this);

    const func2 = function() {
      // 入れ子になった関数内のthisは、globalオブジェクトを参照する
      console.log(this);

      const func3 = function() {
      // 入れ子になった関数内のthisは、globalオブジェクトを参照する
        console.log(this);
      }();
    }();
  }
}

outer.func1();

// 入れ子になった関数内でfunc1を呼びたい場合
const outer2 = {
  func1: function() {
    console.log(this);
    let func = this; // ここで変数を取る

    const func2 = function() {
      console.log(func);

      const func3 = function() {
        console.log(func);
      }();
    }();
  }
}

outer2.func1();
