// type
type HelloFunctionGeneric1 = <T>(message : T) => T;

const helloFunction1 : HelloFunctionGeneric1 = <T>(message : T) : T => {
  return message;
};


// interface
interface HelloFunctionGeneric2 {
  <T>(message : T) : T;
}

const helloFunction2 : HelloFunctionGeneric2 = <T>(message : T) : T => {
  return message;
};