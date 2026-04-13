const template = document.getElementById('template-calendar')
import styles from "./calendar.css" with  { type: "css" };



class Calendar extends HTMLElement{

    static observedAttributes = ["date","size"];

    #date

    constructor(){
        super();
        const shadow= this.attachShadow({
            mode:'open'
        })        
        shadow.adoptedStyleSheets =[styles]
        shadow.appendChild(template.content.cloneNode(true))
        console.log("constructor")
    }

    connectedCallback(){
        console.log("connectedCallback")
    }

    disconnectedCallback(){
        console.log("disconnectedCallback")
    }

    set date(value){
        if(value!==this.#date){
            this.#date = value
        }        
    }
    get date(){
        return this.#date;
    }

    attributeChangedCallback(name,oldValue,newValue){
        //console.log(`${name}->preious:${oldValue}, current:${newValue}`)
        if(name in this){
           this[name] = newValue;
        }
        
    }
}

customElements.define('canarias-calendar',Calendar)

//https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements#:~:text=A%20custom%20element%20is%20implemented,be%20called%20by%20the%20browser.
//https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/template

//content

//https://developer.mozilla.org/es/docs/Web/HTML/Reference/Elements/slot


/*
    <slot name="toolbar">
    <slot name="content">
    <slot name="menu">


    div slot="toolbar"
    div slot="contenct"
    div slot="menu"

*/


//https://developer.mozilla.org/es/docs/Web/CSS/Reference/Selectors/:host
//https://web.dev/articles/constructable-stylesheets?hl=es-419

//https://preactjs.com/
//https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/--*

