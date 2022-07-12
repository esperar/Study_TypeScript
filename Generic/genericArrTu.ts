function helloArray<T>(message : T[]) : T {
  return message[0];
}

helloArray(['Hello' , 'World']); // Hello가 리턴됨
helloArray(["Hello",5]); // 다른 타입으로 넣으면 union 타입으로 변환된다. string|number

function helloTuple<T, K>(message : [T , K]) : T {
  return message[0];
}

helloTuple(["Hello" , "Tuple"]);
helloTuple(["Hello" , 5]); // T : string U : number
// 상황에 맞추어서 사용해야함. 
// tuple이 들어온다면 generi tuple ex ) function name<T>(value : T[]): T{...}
// array라면 generic array로 사용한다 function name<T, K>(value : [T , K]) : T {...}



