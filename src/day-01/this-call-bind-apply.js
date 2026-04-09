//Asignamos un metodo a una variable perdida de ambito

var x=10;
var foo = {
    x:11,
    write:function(){console.log(this.x)}
}

foo.write() //11 ok
var writer = foo.write
writer() //10 

window.x =10
window.foo={
    x:11,
    write:function(){console.log(this.x)}
}
window.writer = window.foo.write.bind(window.foo)  //pierdes ambito
window.writer(); //10


//cuando se pasa una funcion a otra funcion como parametro(callback) se pierde el ambito


class Foo{
    constructor(){

        //¿Cual es la menos optima?
        new Bar(this.write.bind(this))  //1  mas optima gasta recursos en establecer el this
        new Bar(()=>this.write())  //2 cada vez que se llama se ejecutan 2 funciones en el call stack

        new Bar(()=>this.data=10)  //2 cada vez que se llama se ejecutan 2 funciones en el call stack
    }
    write(){
        console.log(this)
    }
}

class Bar{
    constructor(writer){
        writer()   //undefined
        this.writer = writer 
        this.writer();   //Bar
    }
}

new Foo()

//asignar un puntero a funcion a otro puntero //perdida de this
//pasar un puntero a funcion a otra funcion(callback) //perdida de ambito


//call
const bar = {}   //es20215


function Foo(name){
   this.name = name
}
Foo.call(bar,"Pedro")

//¿Quien es this en Foo->window


const bar = {}   //es20215


function Foo(name){
   this.name = name
}
Foo.apply(bar,["Pedro"])

//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions



