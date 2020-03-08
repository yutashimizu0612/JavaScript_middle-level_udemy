//======================================================
// ES2015を使用したクラス
//======================================================
class ES2015 {
  constructor() {
    this._version = 2015;
  }

  _increment() {
    this._version++;
  }

  printVersion() {
    console.log(`${this._version}`);
  }
}

const es2015 = new ES2015();
es2015.printVersion();

//======================================================
// ES2019を使用して書き換え
//======================================================
class ES2019 {
  // constructorを省略できる
  // プライベート変数には#を付ける。実際に#versionには外部からアクセスできなくなる（_versionは明示するだけで、実際にアクセスはできてしまった）
  #version = 2019;

  // メソッドも#を付けることでプライベートメソッドになる（このクラス内からのみアクセス可能）
  #increment() {
    this.#version++;
  }

  printVersion() {
    console.log(`${this.#version}`);
  }
}

const es2019 = new ES2019();
es2019.printVersion();

class ES2019Extended extends ES2019 {
  // 継承の際、constructor内でsuperを呼ぶ必要もない
  printVersion() {
    console.log("2019");
  }
}
