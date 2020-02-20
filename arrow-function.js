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
arrowFunc = () => 33;
arrowFunc = x => 33;
arrowFunc = (x) => 33;
arrowFunc = (x, y) => 33;
// 関数内のコードが2行以上の場合は、{}が必要
arrowFunc = (x, y) => {
  let z = x + y;
  console.log(z);
  return z;
}


//============================================
// アロー関数によるthisのbind
//============================================
const normalFunc = {
  id: 5,
  counter: function() {
    // ここでのthisは、sampleFuncになる
    window.setTimeout(function() {
      console.log(this.id); // undefined（thisはwindowオブジェクトだから）
    }, 1000);
  }
}

// setTimeout内でも、同じthisを呼びたい場合
const arrowFunc2 = {
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

arrowFunc2.counter();


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
