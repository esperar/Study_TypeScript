interface Person3{
  name : string;
  age? : number;
  [index : string] : any; // 어떤 이름의 프로퍼티가 와도 괜찮다 라는 의미.
}

function hello3(person : Person3) : void{
  console.log(`안녕하세요 ${person.name} 입니다.`);
}

const p31 : Person3 = {
  name : 'huemang',
  age : 17,
};

const p32 : Person3 = {
  name : "Hope",
  brothers : ['Gyung', 'Su'],
};

const p33 : Person3 = {
  name : "Hoooo",
  father : p31,
  mother : p32,
}

hello3(p33);