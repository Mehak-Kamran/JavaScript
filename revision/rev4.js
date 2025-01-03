//for each

let names=['alice','bob','peter','jane'];

names.forEach((name)=>{
    console.log(name+" ji");

})

//map
let newnames=names.map((name)=>{
   return name;
})

console.log(newnames);

//filter
let condnames=names.filter((name)=>{
   return name==='alice'
})
console.log(condnames)

//destructuring
let obj={
    name:"marry",
    age:[20,30,40],
    address:{
        karachi:"gulshan",
        lahore:"laal qila"
    },
    country:"Pakistan"
}

let access1=obj.age.at(0)
let access2=obj.address.karachi
console.log(access1);
console.log(access2);

let {karachi,lahore} =obj.address
console.log(lahore);

let [f,s] =obj.age
console.log(s)

//spread
//premetives pass by value
let a=4;
let b=a;
console.log(b+1);
console.log(a);

//nonpremitives pass by ref
let array1=[1,2,3]
// let array2=array1

// array2.pop()
// console.log(array2);
// console.log(array1);

//to solve this prob we use spread op
let array2=[...array1];
array2.pop()
console.log(array2);
console.log(array1);

//same for object
let obj1={
    name:"hello",
    color:"black"
}
let obj2={...obj1}
obj2.name="mak";
console.log(obj1)
console.log(obj2)

//spread op is only level one operator (que asked in interview)

let list={
    add:{
        name:"mak"
    },
    tag:"sad"
}
let list2={...list}
list2.add.name="fak";
console.log(list)
console.log(list2)

//rest op
//bajay ye k ap multiple var banay in fun par we can store val in an array code optimization and memorysaves wrt space 

let bilal =function(...val){
console.log(val)
}
bilal(1,2,3,4);



