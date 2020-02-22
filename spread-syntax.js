//============================================
// スプレッド構文 配列の展開
//============================================
// ☆ 基本的な使い方 ☆
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [4, 5, 6];
// ...とするとことで配列を展開できる。
sum(...numbers); // 15

// 従来はapplyを使う必要があった。
sum.apply(null, numbers); // 15


// ☆ メリット ☆
let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];
arr3 = arr1.concat(arr2); // [0, 1, 2, 3, 4, 5]
arr4 = [...arr2, ...arr1]; // [3, 4, 5, 0, 1, 2]
// 中間に別の変数も加えられる（直感的に使える）
arr5 = [...arr2, 15, ...arr1, 21]; // [3, 4, 5, 15, 0, 1, 2, 21]



//============================================
// スプレッド構文 オブジェクトの展開
//============================================
const player1 = { name: 'kuwahara', number: 1, position: 'center' };
const player2 = { name: 'kajitani', number: 3 };

const clonedObj = { ...player1 }; // {name: "kuwahara", number: 1}

// キーが重複した場合は後から入った値が優先されて上書かれる
const mergedObj = { ...player1, ...player2 }; // {name: "kajitani", number: 3, position: "center"}

// オブジェクトをコピーして、新しいオブジェクトを作成するため、元のオブジェクトに影響はない
clonedObj.name = 'kajizato';
console.log(player1); // { name: 'kuwahara', number: 1 }のまま



//============================================
// スプレッド構文
//============================================
const a = [['kuwahara'], ['kajitani'], ['tsutsugo']];
const b = [...a];
