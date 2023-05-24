function Person(a,b,c){
    this.a=a;
    this.b=b;
    this.c=c;
}

Person.prototype.nationality="indian";

var person=new Person(10,20,30);

console.log(person.nationality);