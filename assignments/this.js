/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When we working with "this" in global scope - the value of "this" will be whole window.
* 2. When we invoke the function with dot - object before function will be "this".
* 3. When we use "this" in the constructor function it's refers to specific object which one will be created and returned by constructor function.
* 4. When we use "apply" or "call" - we know that "this" is defined.
*
* write out a code example of each explanation above
*/


// Principle 1
// code example for Window Binding

function hiThere(){
  console.log(this.say);
};
    const say = "Hi there!";

    hiThere();
console.log(this);
console.log();

// Principle 2
// code example for Implicit Binding

let thatGuy = {
  name: 'Heorhii',
  school: 'Lambda school',
  country: 'Ukraine🇺🇦',
  slogan: function (){
    console.log(`${this.name} - is that guy from ${this.country} who study at ${this.school}`);
  }
};
thatGuy.slogan();

// Principle 3
// code example for New Binding
function Heorhii(tell){
  this.thing = tell;
}

let myHeorhii = new Heorhii('We learning a lot of code there');

console.log(myHeorhii.thing);

// Principle 4
// code example for Explicit Binding

function studyLambda(){
  console.log(`We study there ${this.discipline1} with ${this.discipline2} and also will be ${this.discipline3}`);
}

const things = {
  discipline1: 'CSS',
  discipline2: 'JS',
  discipline3: 'Redux',
}

studyLambda.call(things);
