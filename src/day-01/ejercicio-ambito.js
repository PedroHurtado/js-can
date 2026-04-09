/*
Dados los siguientes constructores

function Foo(name){
   this.name = name
}

function Bar(name,surname){
   this.name = name
   this.surname = surname
}


Crear una funcion factoria donde pasando como arguentos el ambito,el nombre del constructor y los argumnetos
sea capaz de crar instancias de los constructores

Objectivo->new(internamete)

function factory(scope,strConstructor,...args){
    //new Foo("Pedro")
    //new Bar"Pedro","Hurtado")
}

Requisitos no se puede utilizar new dentro de la funcion factory


factory(window,"Foo", "Pedro")
factory(window,"Bar", "Pedro","Hurtado")

Reflexion

const foo={id}
foo.id
foo["id"]

scope[strContrctor]

*/