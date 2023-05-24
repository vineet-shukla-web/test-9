// generator function
function* generatorFunc() {

    yield 100;
    yield 200;
    yield 300
}

// returns generator object
const generator = generatorFunc();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());