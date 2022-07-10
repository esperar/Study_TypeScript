interface IPerson1{
  name : string;
  age? : number;
  hello() : void;
}

// implements > Interface를 클래스로

class Person implements IPerson1 {
  name: string;
  age?: number | undefined;

  constructor(name : string){
    this.name = name;
  }

  hello(): void {
    console.log(`안녕하세요 ${this.name} 입니다.`);
  }
}

const person : IPerson1 = new Person("Mark");