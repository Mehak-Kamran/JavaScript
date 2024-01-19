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
console.log(jay);



//noofmemfilter=kpop.filter((item)=>(item.members>=5))
//console.log(noofmemfilter);