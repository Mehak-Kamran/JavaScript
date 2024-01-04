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
//change object
userjs.password='ricki'
console.log(userjs)

//fuc in obj
userjs.myf=function(){
    console.log(`Hello my id is ${this.id}`)
}
console.log(userjs.myf())
//obj freeze
Object.freeze(userjs)
userjs.name='ash'
console.log(userjs.name);