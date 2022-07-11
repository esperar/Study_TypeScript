class ClassName {
  private static instance : ClassName | null = null;
  public static getInstance() : ClassName{
    // ClassName로부터 만든 object가 있으면 그걸 리턴
    // 없으면 , 만들어서 리턴
    if(ClassName.instance === null){
      ClassName.instance = new ClassName();
    }
    return ClassName.instance;
  }


  private constructor() {

  } // new를 호출하지 못하게 만듬
}

// const a2 = new ClassName(); error

const a2 = ClassName.getInstance();
const b2 = ClassName.getInstance();
console.log(a2 === b2); // true
