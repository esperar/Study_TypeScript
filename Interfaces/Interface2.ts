interface Person2 {
  name : string;
  age? : number; // 있어도 되고 없어도 된다는 뜻
}

function hello2(person : Person2) : void {
  console.log(`안녕하세요 ${person.name} 입니다.`);
}

hello2({name : 'Huemang' , age : 17}); // O
hello2({name : 'Hope'}); // O