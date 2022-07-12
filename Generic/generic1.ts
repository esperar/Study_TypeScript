function helloString(message : string) : string{
  return message;
}

function helloNumber(message : number) : number{
  return message;
}

// 더 많은 반복된 함수들 ...

function hello(message : any) : any{
  return message;
}

console.log(hello("hi").length); 
console.log(hello(123).length);

// generic 
// 장점 : any와 다르게 type으로 된 연산이 함수 내에서 가능하게 된다.
function helloGeneric<T>(message : T) : T {
  return message;
}

console.log(helloGeneric('Huemang').length); // [ type : string ]
console.log(helloGeneric(17)); // [ type : number ]
console.log(helloGeneric(true)); // [ type : boolean ]