const playersArray = ["kuwahara", "kajitani", "imanaga", "mikami", "kyoyama"]

const playersObj = {
  first: 'rope',
  second: 'shibata',
  third: 'pooh',
  center: 'kuwa',
  right: 'kaji',
  left: 'tsutsugo'
}

//============================================
// オブジェクトのループ【1】
//============================================
let keyPlayers = Object.keys(playersObj); // ["first", "second", "third", "center", "right", "left"]
for(let i = 0; i < keyPlayers.length; i++) {
  console.log(i, playersObj[keyPlayers[i]]);
}

//============================================
// オブジェクトのループ【2】 for in
//============================================
// iには、オブジェクトのキーが入る（配列の場合はindex）
// for inのループは、対象のオブジェクトや配列のPrototypeの値まで参照してしまう
for(let i in playersObj) {
  // iに入ってくるキーが、playersObjオブジェクト自身に属しているかを確認する。
  // Prototypeから継承されたものにはfalseを返す。
  if(playersObj.hasOwnProperty(i)) {
    console.log(playersObj[i]);
  }
}

//============================================
// オブジェクトのループ【3】for of
//============================================
// iには、オブジェクトのvalueが入る
let valuePlayers = Object.values(playersObj); // ["rope", "shibata", "pooh", "kuwa", "kaji", "tsutsugo"]
for(let player of valuePlayers) {
  console.log(player);
}

let playerEntries = Object.entries(playersObj); // [ ["first", "rope"], ["second", "shibata"], ["third", "pooh"], ["center", "kuwa"], ["right", "kaji"], ["left", "tsutsugo"] ]
for(let [position, name] of playerEntries) {
  console.log(`${position}: ${name}`);
};
