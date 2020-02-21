//============================================
// アロー関数
//============================================
// ☆ 今回ベースとするアロー関数 ☆
// const timesTwo = i => {
//   return i * 2;
// }

// ☆ 1行しかない場合は、{}とreturnは削除できる ☆
const timesTwo = i => i * 2;

const res = timesTwo(2); // 4


// ☆ 書き方まとめ ☆
const arrowFunc1 = () => 33;
const arrowFunc2 = x => 33;
const arrowFunc3 = (x) => 33;
const arrowFunc4 = (x, y) => x + y;
const arrowFunc5 = (x, y) => [x, y]; // 配列も返せる
// 関数内のコードが2行以上の場合は、{}が必要
const arrowFunc6 = (x, y) => {
  let z = x + y;
  console.log(z);
  return z;
}

// オブジェクトリテラルをreturnする場合は、{}を()で括る必要がある！！！
const arrowFunc7 = (id) => ({ "id": id });


//============================================
// アロー関数によるthisのbind
//============================================
const sampleFunc = {
  id: 5,
  counter: function() {
    // ここでのthisは、sampleFuncになる
    window.setTimeout(function() {
      console.log(this.id); // undefined（thisはwindowオブジェクトだから）
    }, 1000);
  }
}

// setTimeout内でも、同じthisを呼びたい場合（callやbindを使う方法もある）
const arrowFunc8 = {
  id: 5,
  counter: function() {
    // setTimeoutのcallback関数内のthisは、arrowFunc2オブジェクトを参照する。
    // アロー関数の場合、thisはアロー関数内で定義されない。すると、スコーンチェーンを辿って、thisを探しに行く。
    // 最終的にはglobalスコープを探して、その変数（ここではthis）が存在しなければ、undefinedを返すという仕組み。
    window.setTimeout(() => {
      console.log(this.id);
    }, 1000);
  }
}

arrowFunc8.counter();


//============================================
// 練習
//============================================
window.me = 'global';
const outer = function() {
  let me = 'outer';
  return {
    me: 'inner',
    say: () => {
      console.log('me', this.me);
    }
  }
}
outer().say();
