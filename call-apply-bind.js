//============================================
// call
//============================================
// ☆ callによって、thisをbindする ☆
(function() {
  function greet() {
    let hi = `Hi, ${this.name}`
    console.log(hi);
  }

  let obj = {
    name: "YUTA"
  };

  // 第1引数に、greet関数内のthisとして指定したいオブジェクトを入れる
  // すると、関数内のthisは指定したオブジェクトを指すことになる。
  greet.call(obj); // Hi, YUTA


  // ☆ call関数の第2引数以降は、argumentsオブジェクトとしてアクセスできる ☆
  function greet2() {
    // argumentsは配列ライクなだけで、配列ではない。そのため、下記で配列に変換する
    let slicedArray = [].slice.call(arguments);
    let slicedArray2 = Array.prototype.slice.call(arguments); // こうも書ける
    console.log(slicedArray); // ["kuwahara", "kajitani", "soto", "sano"]
    console.log(slicedArray2); // ["kuwahara", "kajitani", "soto", "sano"]
  }

  greet2.call(obj, "kuwahara", "kajitani", "soto", "sano");

  // ☆ 寄り道 ☆
  // Array.prototype.****.callは、arguments以外の配列ライクなオブジェクトなら使用できる。
  const players = {
    0: "kuwahara",
    1: "kajitani",
    2: "soto",
    3: "sano",
    length: 4 // lengthを指定しないと空になる。
  }

  let playersArray = Array.prototype.slice.call(players);
  // let playersArray = [].slice.call(players); // 当然これでもok
  console.log(playersArray);
}());



//============================================
// apply
//============================================
// ☆ applyも基本的にcallと同様 ☆
(function() {
  function greet() {
    console.log('apply-arguments', arguments);
    let hi = `Hi, ${this.name}`
    console.log(hi);
  }

  let obj = {
    name: "ERIKO"
  };

  // applyの場合は、配列で第2引数に渡してあげる。
  // 使い分けとしては、配列で渡す場合はapplyを使い、その以外の場合はcallを使う。
  greet.apply(obj, [1, 2, 3, 4]);

  // applyの使い所
  const array = [1, 2 ,3 ,4, 5];
  console.log(Math.min(array));// 配列を展開しないとNaNになってしまう
  console.log(Math.min(1, 2, 3));// つまりこうする必要がある。
  // そこでapplyを使って関数を実行する。
  // applyの第1引数はthisを決めるものなのでnull、第2引数以降に対象の配列を渡す
  console.log(Math.min.apply(null, array));
  // ES6からはSpread Operatorを使う
  console.log(Math.min(...array));

}());
