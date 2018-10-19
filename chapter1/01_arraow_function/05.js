function DelayedGreeter(name) {
  this.name = name;
}

DelayedGreeter.prototype.greet1 = function() {
  setTimeout(
    function cb() {
      console.log('Hello ' + this.name);
    }.bind(this),
    500
  );
};

DelayedGreeter.prototype.greet = () => {
  setTimeout(
    function cb() {
      console.log('Hello ' + this.name);
    }.bind(this),
    500,
  );
};

const greeter = new DelayedGreeter('World');
greeter.greet(); // will print “Hello World”
