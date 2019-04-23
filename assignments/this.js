/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. window binding: in global scope (this) points to all of JavaScript
 * 2. implicit binding: when called by (.this) this is whatever is to the left of the dot
 * 3. new binding: when (.this) is used in an object constructer (.this) points to the new object
 * 4. explicit binding: when you use .call or .apply you can change what (.this) is pointing to 
 *
 * write out a code example of each explanation above
 */

// Principle 1

function greet(message) {
  console.log(this); //<- code example for Window Binding
  return message;
}
greet("Hello, world!");

// Principle 2
const myThing = {
  greet: "Hello,",
  sayHello: function(who) {
    console.log(`${this.greet} ${who}!`); //<- code example for Implicit Binding
  }
};
myThing.sayHello("world");

// Principle 3
function Greeter(who) {
  this.greeting = "Hello, ";
  this.who = who + "!";
  this.greet = function() {
    console.log(this.greeting + this.who); //<- code example for New Binding
  };
}

const world = new Greeter("world");
const universe = new Greeter("universe");

world.greet();
universe.greet();

// Principle 4

  universe.greet.apply(world);//<- code example for Explicit Binding 