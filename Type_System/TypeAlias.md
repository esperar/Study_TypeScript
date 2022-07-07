# 타입 별칭

## 타입 별칭 (별명)
- `Interface` 랑 비슷해 보입니다.
- Primitive, Union Type, Tuple , Function
- 기타 직접 작성해야하는 타입을 다른 이름을 지정할 수 있습니다.
- 만들어진 타입의 `refer` 로 사용하는 것이지 타입을 만드는것은 아닙니다.

### Aliasing Primitive
```ts
type MyStirngType = string;

const str = 'world';

let myStr : MyStringType = 'hello';
myStr = str;

// 별 의미가 없다.....
```

### Aliasing Union Type
```ts
let person : string | number = 0;
person = 'Huemang';

type StringOrNumber = string | number;

let another : StringOrNumber = 0;
another = 'Hope';

// 1. 유니온 타입은 A 도 가능하고 B 도 가능한 타입
// 길게 쓰는걸 짧게 만들어준다.
```

### Aliasing Tuple
```ts
let person : [string , number] = ['Huemang', 17];

type PersonTuple = [string, number];

let another : PersonTuple = ['Hope', 24];

// 1 튜플 타입에 별칭을 줫 ㅓ여러군데서 사용할 수 있게 한다.
```

### Aliasing Function
```ts
type EatType = (food : string => void);
```