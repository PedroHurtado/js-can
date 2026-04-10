/*
En un sistema existen clientes que se pueden actualizar,crear,eliminar,leer
Los usuarios del sistema solo se pueden leer
*/

const Add = base => class extends base{
    add(){}
}

const Update = base => class extends base{
    update(){}
}

const Remove= base => class extends base{
    remove(){}
}

const Get= base => class extends base{
    get(){}
}

/*class Customer extends(Add(Update(Remove(Get(class {})))){

}

class User extends Get(class{}){

}*/

class Mixin{
    constructor(Base){
        this._Base= Base || class {};
    }
    withMixins(...mixins){
        return mixins.reduceRight((prototype,mixin)=>mixin(prototype),this._Base)
    }

}

/*
    1+2=3
    3=3=6

    Base+Add
    Base+Add+Update
    Base+Add+Updte+Remove
    Base+Add+Update+Remove+Get

*/

function inherit(Base=class{}){
    return new Mixin(Base)
}

class Customer extends inherit().withMixins(Add,Update,Remove,Get){

}

class User extends inherit().withMixins(Get){

}