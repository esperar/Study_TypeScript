interface Person4 {
  name : string;
  age: number;
  hello() : void;
}

const p41 :Person4 = {
  name : 'Mark',
  age : 39,
  hello : function() : void {
    console.log(`안녕하세요 ${this.name} 입니다.`);
  }
}

const p42 :Person4 = {
  name : 'Mark',
  age : 39,
  hello() : void {
    console.log(`안녕하세요 ${this.name} 입니다.`);
  }
}

// p41과 p42는 같은 뜻이다.

// const p43 :Person4 = {
//   name : 'Mark',
//   age : 39,
//   hello: () : void => {
//     console.log(`안녕하세요 ${this.name} 입니다.`);
//   }
// }; << arrow function error 화살표함수는 this를 불러올수 없기 때문에 오류가난다.

