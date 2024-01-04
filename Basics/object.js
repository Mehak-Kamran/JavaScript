//declare a symbol
const pass=Symbol('hey')


//define an object through literal
const userjs={
    [pass]:'hola',
    'id':2,
    name:'mak',
    password:'hello',
    list:['banana','apple']

}
//acces an obj
console.log(userjs.password);
console.log(userjs['id']);
console.log(userjs[pass])
