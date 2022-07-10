interface IPerson2 {
  name : string;
  age? : number; 
}

// extends를 사용해서 상속
interface IKorean extends IPerson2 {
  city : string;
}

const k : IKorean = {
  name : '김희망',
  city : '광주',
  age : 17
};

// 예를들어 HTMLDivElement 는 extends HTMLElement를 가지고있다. 
// 이런식으로 extends는 인터페이스 상속을 할때 많이 쓰인다.