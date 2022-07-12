class Person<T,K> {
  private _name : T;
  private _age : K;
  constructor(name : T , age : K){
    this._name = name;
    this._age = age;
  }
}

// class 에서도 제네릭을 사용할 수 있다.

new Person("Huemang", 17); // Person에 T가 string으로 들어감
// new Person<number>(1234); // number형이 아닌 다른 인자를 넣으면 오류
new Person<string,number>("Hope", 17); 