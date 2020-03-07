//======================================================
// プロトタイプをクラスに書き換え（ES6以降）
//======================================================
class Person {
  constructor(first, last) {
    this.first = first;
    this.last = last;
    // _を付けることで、private変数であることを明示する
    this._age = 0;
  }

  introduce() {
    console.log("My name is " + this.last + " " + this.first);
  }

  // staticを付けると、コンストラクタ関数から直接呼び出せる
  static sayHello() {
    // インスタンス化されていないので、thisを使ってもundefined。thisに依存しない関数である必要がある
    console.log("Hello!");
  }

  // ゲッター / private変数 '_age'を取得する場合はこの関数を使う（直接アクセスしない）
  get getAge() {
    return this._age;
  }

  // セッター / private変数 '_age'をセットする場合はこの関数を使う（直接アクセスしない）
  set setAge(value) {
    this._age = value;
  }
}

// クラスの継承
// extendsを使用すると、prototypeも継承される
// したがって、Object.setPrototypeOf(BaseballPlayer.prototype, Person.prototype)も不要
class BaseballPlayer extends Person {
  constructor(first, last, number) {
    super(first, last);
    this.number = number;
  }

  introduce() {
    console.log(
      "My name is " + this.last + " " + this.first + " I am a baseball player"
    );
  }

  hit() {
    console.log("hit!!");
  }
}

let me = new Person("masayuki", "kuwahara");
me.introduce();
let you = new BaseballPlayer("kajitani", "takayuki");
you.introduce();
you.hit();
console.log(you.getAge); // 0
you.setAge = 32;
console.log(you.getAge); // 32：setAgeしたので32に変更された
