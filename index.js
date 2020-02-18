const sayFoo = function() {
  console.log(this['foo']);
}

// globalオブジェクトに格納された変数（ブラウザでは、windowオブジェクト）
// letやconstを省いて定義すると、globalオブジェクトの変数になる（バグの温床ゆえ、推奨されない）
foo = 'foo'

const mySecondObj = {
  foo: 'I`m in the object',
  sayFoo
}

// globalオブジェクトがthisとなるため、global変数であるfooが呼ばれる。
sayFoo();

// mySecondObjというオブジェクトの中で呼ばれるため、thisが指すのは、mySecondObj。
// よって、mySecondObj.fooが呼ばれる。
mySecondObj.sayFoo();