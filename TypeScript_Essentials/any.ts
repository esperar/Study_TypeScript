// any 어떤 타입이든 사용 가능
function returnAny(message : any) : any {
  console.log(message);
}

const any1 = returnAny('리턴은 아무거나');

any1.toString(); // isOk

let looselyTyped : any = {};

const d = looselyTyped.a.b.c.d; // isOk

// any 는 안정성을 잃기 쉬움.. 그렇게 많이 추천은 안함

function leakingAny(obj : any){
  const a = obj.num;
  const b = a + 1;
  return b;
}

const c = leakingAny({num : 0}); // a : any b : any c : any
// const d : stirng = c.indexOf("0"); // 