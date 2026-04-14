import styles from "./item.css" with  { type: "css" };

export class ProductItem extends HTMLElement {
    #description = ''
    #price = 0
    constructor(description, price) {
        super();
        this.#description = description
        this.#price = price
        const shadow = this.attachShadow({ mode: 'open' })
        shadow.adoptedStyleSheets = [styles]
        shadow.appendChild(this.#getTemplate.content.cloneNode(true))
    }

    #getTemplate() {
        const template = document.createElement('template')

        const divDescription = document.createElement('div')
        divDescription.textContent = this.#description;
        const divprice = document.createElement('div')
        divprice.textContent = this.#price;
        template.content.appendChild(divDescription)
        template.content.appendChild(divprice)
        return template;
    }
}