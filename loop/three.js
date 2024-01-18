//for of array
bts=["jimin","jooni","hobi"]

for (const item of bts) {
    //console.log(item);
    
}
//it is suitable for array , it always gives value not index 

//for of map
//map is like object
let makaniline = new Map()
makaniline.set("chimmi","jimin")
makaniline.set("tiger","V")
makaniline.set("kookie","jk")
for (const [key,value] of makaniline) {
    //console.log(key);//printing value
    //console.log(key);
    
}
//for of obj
// let bp={
    
//     mem1:"lisa",
//     mem2:"rose",
//     mem3:"jisoo",
//     mem4:"jenni"
// }
// for (const [key,value] of bp) {
//     //console.log(key);////bp is not iteratable
// }


//therefore we use for in loop for obj

hayungline={
    1: "jin",
    2: "namjoon"
}
for (const [key] in hayungline) {
    console.log(hayungline[key]);
    
}