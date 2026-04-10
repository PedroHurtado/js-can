//Sumar el 5 y 3 para que de 8
//solamente se puede pasar a la funcion un solo valor

//No

function sum(a){
    //a
    return function(b){
        //b
        debugger
        return a+b
    }
}

sum(5)(3) //8

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures

function events(node,event,cb){
    node.addEventListener(event,cb)
    return ()=>node.removeEventListener(event,cb)
}

function signal(value){   //constructor
    let initialValue= value
    const fn = ()=>initialValue //getter
    const setter = (value)=>{ //setter
        if(value!==initialValue){
            initialValue = value
            console.log(initialValue)
        }
    }    
     fn.update = setter
     return Object.freeze(fn)
}


/*
<div>text()</div>

class Component{
   text = signal(30)
}

<div>30</div>

node.textContet = text()

*/


