abstract class AbstractPerson {
  protected _name : string = 'Huemang';

  abstract setName(name : string) : void;  
}

class Person5 extends AbstractPerson {
  setName(name: string): void {
    this._name = name;
  }
}

const p = new Person5();
// p.setName();