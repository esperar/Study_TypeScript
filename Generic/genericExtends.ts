class PersonExtends<T extends string | number> { 
  // T 는 string과 number의 유니온타입의 상속을 받는다 >> string과 number만 가능
  private _name : T;

  constructor(name : T){
    this._name = name;
  }
}
new PersonExtends("Huemang");
new PersonExtends(17);
// new PersonExtends(true);  error
// 타입의 범위는 최대한 좁게 지정하는 것을 추천한다 그래서
// 앞으로 generic을 쓸때 extends를 사용하도록 노력해보자.