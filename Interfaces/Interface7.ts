interface HelloPerson {
  (name : string, age? :number) : void;
}

// age의 ?를 지우면 오류가 발생한다.
// 왜냐하면 number와 undefined에 합은 그냥 number 보다 크기때문이다.
const helloPerson : HelloPerson = function(name : string , age? :number) {
  console.log(`안녕하세요 ! ${name} 입니다.`);
}

helloPerson('Huemang', 17);