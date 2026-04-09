function sum(a,b){
    return a+b;
}


//2014
function Foo(name){   
    this._name = name;
}

/*
 class Foo{
     private String _name;
     public Foo(String name){
       _name = name;
     }
 }
*/
//Metodo público sin argumentos y void
Foo.prototype.write = function(){
    this._write();
}
//Metodo private sin argumentos y void
Foo.prototype._write = function(){
    console.log(this._name);
}
//static method
Foo.write = function(){
    console.log("static method")
}

//2015

class Foo{
    constructor(name){
        this._name =name
    }
    write(){
        this._write();
    }
    _write(){
        console.log(this._name)
    }
    static write(){
        console.log("static method")
    }
}

/*
https://github.com/tc39/ecma262

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function

https://web.dev/?hl=es-419

*/