interface Person8 {
  name : string;
  age? : number;
  readonly gender : string;
}

const p81 : Person8 = {
  name : 'Huemang',
  gender : 'male',
}

// p81.gender = "female"
// readonly를 제거하면 바뀐다. 즉 readonly 는 `한번 만들어지고 바뀌지않는 값이`라면 붙여줘야한다.