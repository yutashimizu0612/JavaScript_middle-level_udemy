//======================================================
// プロトタイプ 継承
//======================================================
// ☆ 【継承元】Person ☆
function Person(first, last) {
  this.first = first;
  this.last = last;
}

Person.prototype.introduce = function() {
  // このthisは、Personというコンストラクタ関数を指している
  console.log("My name is " + this.last + " " + this.first);
};

// ☆ 【継承先】BaseballPlayer ☆
function BaseballPlayer(first, last, number) {
  // 継承：同じ記述をしないため、Personクラスの機能をBaseballPlayerにコピーしちゃうという考え方
  Person.call(this, first, last);
  this.number = number;
  this.hit = function() {
    console.log("hit!!");
  };
}

// prototypeも継承する必要がある
// Object.setPrototypeOf(継承先, 継承元);
Object.setPrototypeOf(BaseballPlayer.prototype, Person.prototype);

let player = new BaseballPlayer("takayuki", "kajitani", 3);
// 継承したfirstやlastを、BaseballPlayerのインスタンスでも使用できる
console.log(`${player.last} ${player.first} number is ${player.number}`); // kajitani takayuki number is 3

player.introduce();
