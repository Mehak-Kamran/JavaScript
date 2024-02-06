// // protyotype

// university={
//     name:"UoK",
//     teacher:200,
//     salary(){
//         console.log("Salary is 200 usd")
//     }

// }

// bonus={
//        extra:"30%"
// }

// bonus.__proto__=university

// //class

// class universal {
//     wages(){
//         console.log("Wages are 20%")
//     }

//     controller="admin"

//     employeename(ename){
//     this.empl=ename
//     }
// }

// employee1= new universal()
// employee1.employeename("haitham")

// employee2=new universal()
// employee2.employeename("hafsa")
 

//inheritance 

class Person{
    sleep(){
        console.log("sleep");
    }
    eat(){
        console.log("eat");
    }
}

class engineer extends Person{
    work(){
        console.log("build diffrent new things");
    }
}

let obj=new engineer();