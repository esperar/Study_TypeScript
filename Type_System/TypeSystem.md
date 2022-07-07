# Type System


## 작성자와 사용자의 관점으로 코드 바라보기

### 타입 시스템
- 컴파일러에게 사용하는 타입을 명시적으로 지정하는 시스템
- 컴파일러가 자동으로 타입을 추론하는 시스템

### 타입스크립트의 타입 시스템
- 타입을 명시적으로 지정할 수 있다.
- 타입을 명시적으로 지정하지 않으면, 타입스크립트 컴파일러가 자동으로 타입을 **추론**

<br>

### 타입이란 해당 변수가 할 수 있는 일을 결정합니다.
   
```js
// JavaScript

//f1 이라는 함수의 body 에서는 a 를 사용할 것 입니다.
//a 가 할 수 있는 일은 a 의 타입이 결정합니다

function f1(a){
  return a;
}
```


### 함수 사용법에 대한 오해를 야기하는 자바스크립트
```js
// JavaScript

//(f2 실행의 결과가 NaN 을 의도한 것이 아니라면)
// 이 함수의 작성자는 매개변수 a 가 number 타입이라는 가정으로 함수를 작성했습니다.

function f2(a){
  return a * 38;
}

// 사용자는 사용법을 숙지하지 않은 채, 문자열을 사용하여 함수를 실행했습니다.

console.log(f2(10)); // 380
console.log(f2('Mark')) // NaN
```

### 타입스크립트의 추론에 의지하는 경우

```ts
// 타입스크립트 코드지만,
// a의 타입을 명시적으로 지정하지 않은 경우이기 때문에 a 는 any 로 추론됩니다.
// 함수의 리턴 타입은 number 로 추론됩니다. (NaN 도 number의 하나입니다.)

function f3(a){
  return a * 38;
}

console.log(f3(10)); // 380
console.log(f3('mark')); // NaN
```


## nolmpicitAny 옵션을 켜면
- 타입을 명시적으로 지정하지 않은 경우. 타입스크립트가 추론 중 'any' 라고 판단하게 되면, 컴파일 에러를 발생시켜 명시적으로 지정하도록 유도한다.

### nolmplicitAny에 의한 방어
```ts
// error TS7006 : Parameter 'a' implicitly has an 'any` type.

function f3(a) {
  return a * 38;
}

// 사용자의 코드를 실행할 수 없습니다. 컴파일이 정상적으로 마무리 될 수 있도록 수정해야 합니다.


console.log(f3(10)); // 380
console.log(f3('mark') + 5); // NaN
```

### number 타입으로 추론된 리턴 타입

```ts
// 매개변수의 타입은 명시적으로 지정했습니다.
// 명시적으로 지정하지 않은 함수의 리턴 타입은 number 로 추론됩니다.

function f4(a : number){
  if(a > 0){
    return a * 38;
  }
}

// 사용자는 사용법에 맞게 숫자형을 사용하여 함수를 실행했습니다.
// 해당 함수의 리턴 타입은 number 이기 때문에, 타입에 따르면 이어진 연산을 바로 할 수 있습니다.

console.log(f4(5)); //190
console.log(f4((-5) + 5)) // NaN
```


## strictNullChecks 옵션을 켜면
- 모든 타입에 자동으로 포함되어 있는 `null` 과 `undefined` 를 제거해줍니다.

### number | undefined 타입으로 추론된 리턴 타입
```ts
// 매개변수의 타입은 명시적으로 지정했습니다.
// 명시적으로 지정하지 않은 함수의 리턴 타입은 number | undefined 로 추론됩니다.

function f4(a : number){
  if(a > 0){
    return a * 38;
  }
}

// 사용자는 사용법에 맞게 숫자형을 사용하여 함수를 실행했습니다.
//해당 함수의 리턴 타입은 number | undefined 이기 때문에,
// 타입에 따르면 이어진 여산을 바로 할 수 없습니다.
// 컴파일 에러를 고쳐야하기 때문에 사용자와 작성자가 의논을 해야합니다.

console.log(f4(5));
console.log(f4((-5) + 5)); // error TS2532 : Object is possibly 'undefined' .
```

### 명시적으로 리턴 타입을 지정해야할까?

```ts
// 매개변수의 타입과 함수의 리턴 타입을 명시적으로 지정했습니다.
// 실제 함수 구현부의 리턴 타입과 명시적으로 지정한 타입이 일치하지 않아 컴파일 에러가 발생합니다.

// error TS2366 : Function lacks ending return statement and return type does not inc

function f5(a : number) : number {
  if(a > 0){
    return a * 38;
  }
}
```

## nolmpicitReturns 옵션을 켜면
- 함수 내에서 모든 코드가 값을 리턴하지 않으면, 컴파일 에러를 발생시킨다.

### 모든 코드에서 리턴을 직접 해야한다.

```ts
// if 가 아닌 경우 return 을 직접 하지 않고 코드가 종료된다.

// error TS7030 : Not all code paths return a value.

function f5(a : number){
  if(a > 0){
    return a * 38;
  }
}
```

### 매개변수에 object가 들어오는 경우

```js
// JS
function f6(a){
  return `이름은 ${a.name} 이고 , 연령대는 ${
    Math.floor(a.age / 10) * 10
  } 대 입니다. `;
}

console.log(f6({name : 'huemang' , age : 17})); // 이름은 huemang 이고 연령대는 10대 입니다.
console.log(f6('huemang')); // 이름은 undefined 이고, 연령대는 NaN대 입니다.
```

### object literal type
```ts
function f7(a : {name : string; age : number}) : string{
  return `이름은 ${a.name} 이고 , 연령대는 ${
    Math.floor(a.age / 10) * 10
  } 대 입니다. `;
}

console.log(f7({ name : 'Huemang' , age : 38})); // 이름은 Huemang이라 하고 연령대는 10대입니다.
console.log(f7({'Huemang'})); // error TS2345 : Argument of type 'string' is not assignable to parameter of type `{name : string ; age : number;}' .
```

### 나만의 타입을 만드는 방법
```ts
interface PersonInterface {
  name : string;
  age : number;
}

type PersonTypeAlias = {
  name : string;
  age : number;
};

function f8(a: PersonInterface): string {
 return `이름은 ${a.name} 이고, 연령대는 ${
 Math.floor(a.age / 10) * 10
 }대 입니다.`;
}

console.log(f8({ name : 'Huemang' , age : 17})); // 이름은 Huemang이고 , 연령대는 10대 입니다.
console.log(f8('Huemang')); // error TS2345: Argument of type 'string' is not assignable to parameter of type 'PersonInterface'.
```

1. `interface + 이름`
2. `type + 이름`