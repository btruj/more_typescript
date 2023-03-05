//1st example
// Interface lets us define the structure of an object
// interface Person {
//     name: string;
//     age: number;
//     greet(phrase: string): void;
// }

// let user1: Person;

// user1 = {
//     name: 'Max',
//     age: 30,
//     greet(phrase: string) {
//         console.log(phrase + ' ' + this.name);
//     }
// };

// user1.greet('Hi there - I am');

// type AddFn = (a: number, b: number) => number;
//custom function type  
interface AddFn {
    (a: number, b: number): number;  
}

 let add: AddFn;

    add = (n1: number, n2: number) => {
        return n1 + n2;
    };

//Using interfaces with classes
interface Named {
    readonly name?: string;
    outputName?: string;
}

interface Greetable extends Named {
    greet(phrase: string): void;
}

class Person implements Greetable, Named {
    name?: string;
    age = 30;

    constructor(n?: string) {
        if(n) {
        this.name = n;
      }
    }
    greet(phrase: string) {
        if(this.name) {
        console.log(phrase + ' ' + this.name);
    } else {
        console.log('Hi!');
    }
  }
}
let user1: Greetable;

user1 = new Person();

user1.greet('Hi there - I am');

console.log(user1);