//============================================
// 分割代入 Destructuring：配列
//============================================
let x, y;
[x, y] = ['kuwahara', 'kajitani'];
x // kuwahara
y // kajitani

// 初期値が設定できる
[x, y, z='tsutsugo'] = ['kuwahara', 'kajitani'];
x // kuwahara
y // kajitani
z // tsutsugo



//============================================
// 分割代入 Destructuring：オブジェクト
//============================================
// プロパティ名と同じ変数名に格納されるため、順番は関係ない
const { name, number, position, team } = {
  team: 'baystars',
  name: 'kuwahara',
  number: 1,
  position: 'center',
};
// team // baystars
// name // kuwahara
// number // 1
// position // center

// ○ ...で残りを展開して変数として拾うこともできる
// ○ 変数名を変更することもできる
const { a: teamName, b: playerName, ...rest } = {
  a: 'baystars',
  b: 'kuwahara',
  c: 1,
  d: 'center',
  e: 'yokohama'
};
// teamName // baystars
// playerName // kuwahara
// rest // {c: 1, d: "center", e: "yokohama"}

// こう書いてあっても、変数を定義しているのと同じ意味
({ d, e, f } = { d: 10, e: 20, f: 30 });
console.log(d); // 10
console.log(e); // 20
console.log(f); // 30



//============================================
// 分割代入 Destructuring：関数の引数に定義するとかなり便利
//============================================
function drawES2015Chart({ size = 'big', coords = { x: 0, y: 0 }, radius = 25 } = {} ) {
  console.log(size, coords, radius);
};
// 引数がない場合は、全て初期値が入る。
drawES2015Chart(); // big {x: 0, y: 0} 25

// 引数がある場合は、引数を使う。ここではsizeは引数として渡されていないので、sizeは初期値の'big'が使われる
drawES2015Chart({ // big {x: 18, y: 30} 30
  coords: { x: 18, y: 30 },
  radius: 30
});
