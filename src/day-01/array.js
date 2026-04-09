const a =[1,2,3,4,5,6]

a.filter(v=>v%2===0)    //[2,4,6]
a.find(v=>v%2===0)   //2
a.sort()
a.filter(v=>v%2===0).map(v=>v*v) //[4,16,36]

a.reduce((a,v)=>a+v)

//1,2 1+2
//3+3=6
//6+4=10
//10+5=15
//15+6=21

a.reduce((a,v)=>a+v,100) //121

//set

const set = new Set([{id:1},{id:1}])  //2 elementos
const set1 = new Set([1,2,3,3,4,4,5])  //5 elementos 1,2,3,4,5

//map

const map = new Map();
map.set("key",1)
map.get("key")
map.has("Key")


//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Set
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Map
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes