function helloBasic<T, U>(message: T, comment : U) : T {
  return message;
}

helloBasic<string , number>("huemang", 17); //첫번째 string형이 아닌 인자를 넣으면 오류가 남
helloBasic(36, 39); // type : number형이 된다. 값에 의해서 위의 함수에서 T를 추론함.
