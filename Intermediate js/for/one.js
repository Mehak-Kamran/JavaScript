//for loop
for(i=1;i<=4;i++){
    //console.log(i);
}
//nested for
for(i=1;i<=5;i++){
    for(j=10;j>=0;j--)
    {
        //console.log("*");
    }
}


//break
age=0
for(age;age<20;age++)
{
    if(age==18)
    {
        //console.log("adult now");
        break;
    }
    //console.log(age);
}
//continue
age=0
for(age;age<=20;age++)
{
    if(age==18)
    {
        //console.log("adult now");
        continue;
    }
    //console.log(age);
}

//array
myarray=["jimin","V","JK"]
for(i=0;i<myarray.length;i++)
{
    console.log(myarray[i]);
}