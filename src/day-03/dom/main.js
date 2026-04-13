/*
    Crear un elemento
*/

function create(){

    /*
    
            'http://www.w3.org/2000/svg'
            'http://www.w3.org/1999/xhtml'
            'http://www.w3.org/1998/Math/MathML'

            pepe->//HTMLUnknownElement 
            canarias_pepe//HTMLUnknownElement 
            canarias-pepe//HTMLElement (W3C webcomponetns)

            document.querySelectorAll(":not(:defined)")

    
    */
    
    const div1 = document.createElementNS('http://www.w3.org/1999/xhtml', 'div')

    const div = document.createElement('div')

    const text = document.createTextNode("Hello World")
    const comment = document.createComment("Comentario")

    return {
        div,text,comment
    }
}

function mounth(){
    const {div,text,comment} = create();
    div.appendChild(text)
    document.body.appendChild(div)
    document.appendChild(comment)

    //apendChild -> n+1->al final

    //div.insertBefore(null,text) // lo mismo que el appendchild
    //div.insertBefore(document.querySelector('script'),div)
    return  {div,text,comment}
}

function update(){
    const {div,text,comment} = create();
    div.setAttribute("id", "xxxx")
    div.setAttribute('data-id',"xxxx")

    //div.setAttribute('required', true) //NOOOOOO
    div.setAttribute('required', '') //OK

    div.className = "red bg flex"

    //div.classList.add()

    div.style.setProperty('color', 'blue')

    text.data ="Hola Mundo"
    comment.data = "Comentario 1"

    return {
        div,text,comment
    }

}

function remove(){
    const {div,text,comment} = update();
    div.parentNode.removeChild(div)  //correcto

    div.remove(); //NO COMPATIBILIDAD IE11}

    
}

function performance(){
    //remove

    document.body.textContent = ''

    //create

    const fragment = document.createDocumentFragment()
    document.body.appendChild(fragment);

    //https://developer.mozilla.org/en-US/docs/Web/API/Document/createTreeWalker


//https://developer.mozilla.org/es/docs/Web/API/Window/requestAnimationFrame
//https://developer.mozilla.org/es/docs/Web/API/Window/requestIdleCallback
//https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
//https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide

    
}

function query(){
    //https://www.w3schools.com/cssref/css_selectors.php

    //document.getElementById()     1
    //document.getElementsByClassName() []
    //document.getElementsByName() //[]
    //document.getElementsByTagName() []


    document.querySelector() //1 solo nodo
    document.querySelectorAll() // array elementos

    const div = document.createElement('div')

    //div.parentNode
    //div.parentElement

    //div.children elements
    //div.childNodes elementos + textos + comments

    //div.nextElementSibling()
    //div.nextSibling()

    //div.previousSibling()
    //div.previousElementSibling()


}

