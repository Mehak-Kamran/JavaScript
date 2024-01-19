//filter
let kpop=[
    {name:"Bts",
      members:7,
      favmem:"jimin",
      favsong:"boy with luv"
    },
    {name:"Twice",
      members:9,
      favmem:"jihyu",
      favsong:"alcoholfree"
    },
    {name:"Newjeans",
      members:4,
      favmem:"hanii",
      favsong:"supershy"
    }
    
]


let jay=kpop.filter( (item)=>item.favsong=="boy with luv")
//console.log(jay);



noofmemfilter=kpop.filter((item)=>(item.members>=5))
//console.log(noofmemfilter);

//map
let an=[1,2,3,4,5,6]
va=an.map((item)=>item+1)
console.log(va);
//chaining in map
ga=an.map((item)=>item+1) .map((item)=>item*0).filter((item)=>item==0)
console.log(ga);









