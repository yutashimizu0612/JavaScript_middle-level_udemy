//============================================
// アロー関数
//============================================
// ☆ 今回ベースとするアロー関数 ☆
// const timesTwo = i => {
//   return i * 2;
// }

// ☆ 1行しかない場合は、{}とreturnは削除できる ☆
const timesTwo = i => i * 2;

const res = timesTwo(2);
console.log(res);


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
