interface IPerson{
  name : string;
  age : number;
}

const person : IPerson = {
  name : 'Mark',
  age : 39,
};

type Keys = keyof IPerson;
// 어떠한 개체의 keyof를 붙이면 그 결과물이 유니온 타입으로 만들어서 변수에 넣어짐.
const keys : Keys = "age";

// IPerson[keyof IPerson] 
//=> IPerson['name' | 'age'] 
//=> IPerson['name'] | IPerson['age']
//=> string | number

function getProp<T, K extends keyof T>(obj : T , key: K) : T[K] {
  return obj[key];
}

getProp(person, 'name'); // string
getProp(person,'age'); // string | number 

function setProp<T , K extends keyof T>(
  obj : T ,
  key : K,
  value : T[K],
) : void {
  obj[key] = value;
}

setProp(person, "name", "Hope");