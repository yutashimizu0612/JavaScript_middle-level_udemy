//============================================
// クロージャの前に、NG例
//============================================
let counter = 0;
increment(); // 1
increment(); // 2
increment(); // 3
// 上記の問題点は、counterという変数に、どこからでもアクセスできてしまうこと。
// 意図しない箇所で、0に戻ってしまったり....。

function increment() {
  counter++;
  console.log(counter);
}



//============================================
// クロージャ
//============================================
// ☆ クロージャを使った例 【1】 ☆
// クロージャの定義： 戻り値の関数が、Lexical Scopeを持っているものをクロージャという。
const increment = (function() { // 全体を即時関数で括る

  let counter = 0; // Lexical Scope（関数から見た親のスコープのこと）
  // 外部からこの変数にアクセスするには、下記のreturnされる関数を用いるしかない。
  return function() {
    counter++;
    console.log(counter);
  }
})();

// 例えばここでcounterを操作しようとしても、increment内のcounter変数に影響はない。
// この変数は別物（違うメモリへの参照を持つ）
increment.counter = 23;

increment(); // 1
increment(); // 2
increment(); // 3

// ☆ クロージャを使った例 【2】 ☆
function addStringFactory(tail) {
  return function(str) {
    return str + tail;
  }
}

let addAs = addStringFactory('AAAAAAA'); // 末尾に'AAAAAAA'が付く関数が生成される。
let addBs = addStringFactory('BBBBBBB');

let str = "yuta";
let test = addBs(str);
console.log(test);

// ☆ まとめ：クロージャのメリット ☆
// 【1】クロージャ内の関数を通じてしかアクセスできない、プライベート変数を定義できる
// 【2】動的に関数を生成できる
