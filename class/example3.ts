class myPerson {
  // static 공통적으로 사용하고 싶은 데이터가 있다면 사용
  public static CITY = "Gwangju";
  public hello(){
    console.log('안녕', myPerson.CITY);
  }
}

const p4 = new myPerson();
// p4.hello(); error

myPerson.CITY;

const p5 = new myPerson();
p5.hello();