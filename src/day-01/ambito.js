//variables

/*Definir variables con var */

var a=10  //global.a =10  global(node) window(browser)

/*
 crear dinamicamente un atributo al objeto global
*/

function foo(){
    var a=10
}

function iterator(){
    for(var i=0;i<100;i++){
        console.log(i)
    }
    console.log(i)  //100
}

function iterator(){
    var i;
    for(i=0;i<100;i++){
        console.log(i)
    }
    console.log(i)  //100
}


function iterator(){
    
    for(let i=0;i<100;i++){
        console.log(i)
    }
    console.log(i)  //error
}

const a=1
a=10  //error

const obj = {} //inmutable

obj=null //error
obj.id=10

const array = []
array =[1,2,3]

array.push(1)
array.push(2)
array.push(3)

//https://developer.mozilla.org/en-US/docs/Web/API/Window/structuredClone
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/let
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/const
