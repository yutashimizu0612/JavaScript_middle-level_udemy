//============================================
// そもそものお話
//============================================
// JavaScriptは、非同期処理が前提
// 問題点
// サーバーからデータを取得する前に、下記の処理が実行されて、エラーや思わぬ挙動が起こる可能性がある。
// const response = getDataFromServer(); // これが完了する前に、、、
// response.doSomething(); // こっちが実行されてしまう

// メリット
// 他の処理が完了するのを待つ必要がない


//============================================
// コールバック関数を用いる
//============================================
// function wait(callback, num) {
//   setTimeout(() => {
//     console.log(num);
//     callback(num);
//   }, 20);
// };

// wait((num) => {
//   num++;
//   wait(num => {
//     num++;
//   }, num)
// }, 0);

//============================================
// Promiseを用いる
//============================================
function wait(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(num);
      if (num === 4) {
        reject();
      } else {
        resolve(num);
      }
    }, num);
  });
};

wait(0).then(num => {
  num++;
  // Promiseのthenを使用して、処理を繋げたい場合は、returnでPromiseを返す必要がある
  return wait(num);
}).then(num => {
  num++;
  return wait(num);
}).then(num => {
  num++;
  return wait(num);
}).then(num => {
  num++;
  return wait(num);
}).then(num => {
  num++;
  return wait(num);
}).catch(() => {
  console.error('error');
})

//============================================
// Promise.all
//============================================
Promise.all(
  // Promiseを配列で渡してあげると、この関数が全て実行完了した時に、thenメソッドが実行される
  // この場合は、wait(3000)がもっとも処理が掛かるので、この処理が終わった段階で、thenメソッドが実行される
  [
    wait(1000),
    wait(2000),
    wait(3000)
  // numsは、それぞれのPromiseが返すresolveの配列
  ]).then(nums => {
    console.log(nums); // [1000, 2000, 3000]
});

//============================================
// Promise.race
//============================================
Promise.race(
  // Promiseを配列で渡すと、いずれか1つの関数が実行完了した時に、thenメソッドが実行される
  [
    wait(1500),
    wait(2500),
    wait(3500)
  ]).then(nums => {
    console.log(nums + 1);
  });
