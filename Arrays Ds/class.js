//refrence type

const object1 = { value: 10 };
const object2 = { value: 10 };
const object3 = object2;

console.log(object1 === object2);

object2.value = 20;

//context vs scope

//instantiation
class Player {
  constructor(name, type) {
    console.log(this);
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I am ${this.name}, I am a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type)
  }
  play() {
    console.log(`Weeeee I'm a ${this.type}`);
  }
}

const wizard1 = new Wizard("Shelly", "Healer");
const wizard2 = new Wizard("Shawn", "Dark Magic");


const hi = [1, 2]
const [one, two] = hi

console.log(one)
console.log(3 == '3')
console.log(6 % 2)

