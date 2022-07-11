class Person {
  public readonly name : string = "Huemang";
  private readonly country : string = "Korea";

  // private에는 변수앞에 _ 를 붙여주는 암묵적인 룰이 있음
  // Person의 프로퍼티 라고 선언 constructor이 생성을 해줌.

  public constructor(private _name : string ,public age : number){
    this.country = "Korea"; // 여기선 변경 가능.
  }
  // 이런식으로 접근제한자로 한줄로 표현가능.

  // get name() {
  //   // console.log("get");
  //   return this._name + " KIM";
  // }

  // set name(n : string){
  //   console.log("set");
  //   this._name = n;
  // }

  hello(){
    // this.country = 'Japan'; error
  }
}

const p1: Person = new Person("huemang",17); // 생성자가 있을땐 무조건 인자를 넣어야한다.
console.log(p1.name); // get 을 하는 함수를 getter ,set 을 하는 함수를 setter
console.log(p1.name); // "Hope"
