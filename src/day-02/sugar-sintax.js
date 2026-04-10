//rest parameters

function sum(...values){
    return values.recude((a,v)=>a+v)
}

sum(1,2,3)
sum(1,2,3,4,5,6)

//limitacion solo puede haber uno y en la ultima posicion de los parametros del metodo

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters



//Default parameters

//Cuantos puedo tener n
//esos n deben de ser los ultimos en posicion

//(a=4,b) error

function sum1(a,b=4){
    return a+b
}

sum1(3) //7
sum1(4,5) //9

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters

//spread opetator

//clonar objetos.

//array
a=[1,2,3]
b=[4,5,6]

c=[...a,...b]

//objetos

const foo = {id:1,name:'pedro', baz={id:1}}
const bar = {name:'pedro hurtado'}

const result = {...foo,...bar}

https://developer.mozilla.org/en-US/docs/Web/API/Window/structuredClone
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

//desectructuring

const array = [1,2,3,4,5,6]
const [a,b] = array
const [a,b,...rest] = array
a->array[0]
b->array[1]
rest->[3,4,5,6]
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring


const foo ={id:1,name:'pedro', phone:616647015}

const {id,name} = foo
const {id.name,...rest} = foo


function print({id,name}){
    console.log(id)
    console.log(name)
}
print(foo)

//Operador de cortocircuito


if(!a){

}
a.b();

if(a!=null){
    a.b();
}

a && a.b();

class Mixin{
    constructor(Base){
        this._Base= Base || class {};
    }
    withMixins(...mixins){
        return mixins.reduceRight((prototype,mixin)=>mixin(prototype),this._Base)
    }

}

a?.b()

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment

