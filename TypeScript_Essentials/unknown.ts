declare const maybe: unknown;

// const aNumber : number = maybe; X

if(maybe === true){
  const aBoolean : boolean = maybe; // O maybe == boolean

  // const aString : string = maybe; X
}

if(typeof maybe === `string`){
  const aString: string = maybe; // O maybe == string

  // const aBoolean : boolean = maybe; X
}