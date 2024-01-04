let BTS=['Jimin','v','jk','rm','jin','hobi','suga']
let BP=['LISA','ROSE','JISO','JENNI']

console.log(BTS,BP);
BTS.push(BP)
console.log(BTS)
console.log(BTS[7][2])
// MARVEL=BTS.concat(BP)
// console.log(MARVEL)

//ALTERNATE OF CONCAT
let score=[1,5,7,8,[3,6,[4,7,0]]]
let scoreflat=score.flat(Infinity)
console.log(scoreflat)

//STORE ANY OTHER IN ARRAY 
player = 'ali'//string
console.log(Array.isArray(player))
console.log(Array.from(player))

score1=6//no
score2=7
console.log(Array.of(score1,score2))


























