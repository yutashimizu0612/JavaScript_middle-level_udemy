//============================================
// object
//============================================
// JavaScriptのオブジェクトに特徴的なのは、prototypeを持っていること

//======================================================
// JavaScriptで同じようなものを生成する：コンストラクタとクラス
//======================================================
// ☆ Factory関数で ☆
function factoryPerson(first, last) {
  let person = { first, last };
  return person;
}

const kuwahara = factoryPerson("masayuki", "kuwahara");
console.log(`${kuwahara.last} ${kuwahara.first}`);

// ☆ コンストラクタ関数 ☆
// 先頭を大文字にする：クラスを定義する時と同じ（すぐにコンストラクタ関数と分かるように）
function Person(first, last, number) {
  this.first = first;
  this.last = last;
  this.number = number;
  // this.introduce = function() {
  //   console.log("My name is " + last + " " + first);
  // };
}

// prototypeを使用する
Person.prototype.introduce = function() {
  // このthisは、Personというコンストラクタ関数を指している
  console.log("My name is " + this.last + " " + this.first);
};

// new Classでインスタンス生成
const you = new Person("takayuki", "kajitani", 3);
const him = new Person("yoshitomo", "tsutsugo", 25);

// 後から書き換えが可能：可能ではあるが、基本的にはするのはNG
you.introduce = function() {
  console.log("Hello!!");
};
you.introduce(); // Hello!!になってしまう
him.introduce(); // こちらは変わらず
// この2つのintroduceは別の関数を呼んでしまっている
// コンストラクタやクラスという概念から考えると、あるクラスのあるメソッドは同じように機能して欲しいのに、
// JavaScriptでは後から書き換えができてしまう

//======================================================
// プロトタイプチェーン
//======================================================
const me = new Person("yuta", "shimizu");
// meからsayhelloという関数を呼ぶとする。
//【1】JavaScriptは、第一にmeオブジェクトにsayhelloがないか調べる
me.sayhello = function() {
  console.log(`Hello! from me`);
};
//【2】第二にPerson.prototypeにsayhelloがないか調べる
Person.prototype.sayhello = function() {
  console.log(`Hello! from Person prototype`);
};
//【3】最後にObject.prototypeにsayhelloがないか調べる
Object.prototype.sayhello = function() {
  console.log(`Hello! from Object prototype`);
};

me.sayhello(); // この場合は、Hello! from me
