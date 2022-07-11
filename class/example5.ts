class Parent{
  constructor(protected _name : string, private _age : number){}

  public print() : void {
    console.log(`이름은 ${this._name} 나이는 ${this._age}`);
  }

  protected printName() : void {
    console.log(this._name , this._age);
  }
}

// const p = new Parent("Huemang",17);
// p.print(); // 이름은 Huemang 나이는 17

class Child extends Parent{
  public _name = 'Huemang Jr.';

  public gender = 'male';
  // 접근 제한자 까지 오버라이딩 됨.

  constructor(age : number){
    super('Huemang Jr.', age) // 부모의 생성자 호출 꼭 해줘야 한다.
    this.printName(); // Huemang Jr. 7
  }
}

const c = new Child(7);

c.print(); // 이름은 Huemang Jr. 나이는 7
c.gender = 'male';
