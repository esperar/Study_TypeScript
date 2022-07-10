interface Person1{
  name : string,
  age : number
}

function hello1(person : Person1) : void {
  console.log(`안녕하세요 ${person.name} 입니다.`);
}

const p1 : Person1 = {
  name : 'Huemang',
  age : 17,
};

hello1(p1);