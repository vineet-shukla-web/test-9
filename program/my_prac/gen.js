function * test(){
 yield 100;
 yield 200;
 yield 300;
}
var gen=test();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());