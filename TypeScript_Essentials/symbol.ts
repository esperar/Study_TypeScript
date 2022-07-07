console.log(Symbol('foo') === Symbol("foo")); //false

const sym = Symbol();

const obj = {
  [sym] : "value",
};

obj[sym];

// 함수로 사용할 땐 대문자 Symbol
// 타입을 사용할 땐 소문자 symbol