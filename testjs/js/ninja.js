let ninjaFun = () => {
  console.log('lddd');
  console.log(ninjaFun.hello);
};

ninjaFun.hello = 'fun';

var store = {
  nextId: 1,
  cache: {},
  add: function(fn) {
    if (!fn.id) {
      fn.id = this.nextId++;
      this.cache[fn.id] = fn;
      return true;
    }
  }
};
function ninja() {}
store.add(ninja);
store.add({ name: 'hello' });

// console.log(store.cache);

function isPrime(value) {
  if (!isPrime.answers) {
    isPrime.answers = {};
  }
  if (isPrime.answers[value] !== undefined) {
    return isPrime.answers[value];
  }
  var prime = value !== 1; // 1 is not a prime

  for (var i = 2; i < value; i++) {
    if (value % i === 0) {
      prime = false;
      break;
    }
  }
  return (isPrime.answers[value] = prime);
}

isPrime(5);
isPrime(6);
isPrime(7);
// console.log(isPrime.answers);
