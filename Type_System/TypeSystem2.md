# Structural Type System vs Nominal Type System

## Structural type system - 구조가 같으면 , 같은 타입이다.

```ts
interface IPerson{
  name : string;
  age : number;
  speak() : string;
}

type PersonType = {
  name : string;
  age : number;
  speak() : string;
};

let personInterface : IPerson = {} as any;
let personType : PersonType = {} as any;

personInterface = personType;
personType = personInterface;
```

<br>

## nominal type system - 구조가 같아도 이름이 다르면, 다른 타입이다.

```ts
type PersonID = string & { readonly brand : unique symbol};

function PersonID(id : string) : personID {
  return id as PersonID;
}

function getPersonById(id : PersonID) {}

getPersonById(PersonID('id-aaaaaa'));
getPersonById('id-aaaaaa'); // error TS2345 : Argument of type 'string' is not assignable to parameter of type 'PersonID' TYpe 'string' is not assignabel to type '{ readonly brand : unique symbol; } '.
```

<br>

## 타입스크립트 as 다운 캐스팅

### as 다운캐스팅
TypeScript 문법으로 as를 사용하여 다운캐스팅을 할 수 있습니다.  
다운 캐스팅은 안전한 방법은 아니지만 가끔 `TypeScript`로 작성하다 보면 필요한 경우도 있습니다.  
다운 캐스팅은 파생된 타입의 값을 부분 타입 형태로 사용하는 방법 입니다.

### Type Assertion(타입 단언)

- Type Assertion은 내가 TypeScript보다 어떤 값의 타입을 보다 명확하게 알고 있을 때 활용한다.
예를 들어 코드상에서 document.getElementById가 사용되는 경우, TypeScript는 이때 HTMLElement 중에 "무언가"가 반환된다는 것만을 알 수 있는 반면에, 나는 언제나 HTMLCanvasElement가 반환된다는 사실을 이미 알고 있을 수도 있다.

```ts
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
```
이런 경우, 위와 같이 Type Assertion을 활용하면 보다 구체적으로 명시할 수 있다.  
Type Assertion은 컴파일러에 의하여 제거되며 코드의 런타임 동작에는 영향을 주지않는다.

```ts
const x = "hello" as number;
```
