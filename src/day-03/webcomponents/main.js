//const template = document.getElementById('template-calendar')

import styles from "./calendar.css" with  { type: "css" };
import { events } from "./util.js";


function* getDays() {
    for (let i = 0; i < 31; i++) {
        yield i + 1;
    }
}

class Calendar extends HTMLElement {

    static observedAttributes = ["date", "size"];

    #date
    #disposables = []
    #days = [...getDays()]

    constructor() {
        super();
        const shadow = this.attachShadow({
            mode: 'open'
        })
        shadow.adoptedStyleSheets = [styles]
        const template = this.#createDays().content.cloneNode(true)
        shadow.appendChild(template)

    }

    #createDays() {
        const template = document.createElement('template')

        this.#days.forEach((day,index)=>{
            const textDay = document.createTextNode(day)
            const divDay = document.createElement('div')
            divDay.className = 'day';
            divDay.setAttribute('data-index', index)
            divDay.appendChild(textDay)
            template.content.appendChild(divDay)
        })        
        return template;

    }
    #handlerClick(ev) {
        const node = ev.composedPath().find(n => n.dataset && 'index' in n.dataset)

        if (node) {
            const { index } = node.dataset
            const day = this.#days[Number(index)]
            console.log(day)
        }
    }

    connectedCallback() {
        this.#disposables.push(events(this, 'click', this.#handlerClick))
    }

    disconnectedCallback() {
        this.#disposables.forEach(disposable => disposable())
        this.#disposables=[]
    }

    set date(value) {
        if (value !== this.#date) {
            this.#date = value
        }
    }
    get date() {
        return this.#date;
    }

    attributeChangedCallback(name, oldValue, newValue) {
        //console.log(`${name}->preious:${oldValue}, current:${newValue}`)
        if (name in this) {
            this[name] = newValue;
        }

    }
}

customElements.define('canarias-calendar', Calendar)

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

//https://css-tricks.com/complete-guide-css-grid-layout/
//https://css-tricks.com/snippets/css/a-guide-to-flexbox/

//https://www.youtube.com/channel/UC7TizprGknbDalbHplROtag