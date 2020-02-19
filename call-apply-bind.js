//============================================
// call
//============================================
// ☆ callによって、thisをbindする ☆
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
