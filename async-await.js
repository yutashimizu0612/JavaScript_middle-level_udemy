//============================================
// async await
//============================================
// awaitを関数内で使用する場合、その関数の前にasyncを付ける（awaitを使用するということは、非同期処理なので、それを明示してあげる）
async function sample() {
  // await： Promiseを返す関数に付ける。すると、そのPromiseの処理が完了するのを待つ
  let num = await asyncFunc(0);
  num++; // これ以降は、asyncFuncが実行されたあとに実行される
  num = await asyncFunc(num);
  num++;
  return num;
};

function asyncFunc(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(num);
      if (num === 4) {
        reject(num);
      } else {
        resolve(num);
      }
    }, 1000)
  })
};

async function sample2() {
  let num = 0;
  //
  try {
    // let num = await asyncFunc(num); // ここに変数を定義すると、tryでスコープができるので、return numがundefinedになってしまう
    num = await asyncFunc(num);
    num++;
    num = await asyncFunc(num);
    num++;
    num = await asyncFunc(num);
    num++;
    num = await asyncFunc(num);
    num++;
  } catch(e) {
    throw new Error('Error is occured');
  }
  return num;
};

sample2().then(num => {
  console.log(num, 'complete');
});
