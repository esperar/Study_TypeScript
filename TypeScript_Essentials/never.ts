function error(message : string) : never {
  throw new Error(message);
}

function fail(){
  return error('failed');
}

function infiniteLoop(): never {
  while(true){

  }
} // 무한루프

declare const str : string | number;

if (typeof a !== 'string'){
  a; // never
}

type Indexable<T> = T extends string ? T & {
  [index : string] : any
} : never;

type ObjectIndexable = Indexable<{}>; // never

// const b : Indexable <{}> = ''; << error
