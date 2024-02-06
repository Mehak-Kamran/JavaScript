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

// class Person{
//     sleep(){
//         console.log("sleep");
//     }
//     eat(){
//         console.log("eat");
//     }
// }

// class engineer extends Person{
//     work(){
//         console.log("build diffrent new things");
//     }
// }

// let obj=new engineer();

//practice problem
Data="Some data "
class user{
    constructor(name,email){
       this. name=name
        this.email=email
    }
    viewdata(){
        console.log(Data)
    }
}
let student=new user("mak","ayesha@gmail.com")

class admin extends user{

    constructor(name,email){
        super(name,email)
    }
editdata(){
            Data="you edit data"
            console.log(Data)
         }
}
let admin1=new admin("admin name","admin@gmail.com")


class kpop{
    constructor(bandname,bandmembers){
       this.bandname=bandname
       this.bandmembers=bandmembers
    }
    welcome(){
        console.log("Welcome to Kpop")
    }
}
let group=new kpop("BTS",7)

class BTS extends kpop{

    constructor(bandname,bandmembers){
        super(bandname,bandmembers)
     }
   hey(){
    console.log("hey we are Bts")
   }
}
let b=new BTS("exo","8")