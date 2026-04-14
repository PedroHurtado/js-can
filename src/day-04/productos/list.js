import styles from "./list.css" with  { type: "css" };

import { ProductItem } from "./item.js";

const products =[
    {id:1,description:'articulo1',price:1.35},
    {id:2,description:'articulo2',price:1.45},
    {id:3,description:'articulo3',price:1.62},

]
export class ListProducts extends HTMLElement{
  constructor(){
    super();
    const shadow = this.attachShadow({mode:'open'})
    shadow.adoptedStyleSheets =[styles]
    shadow.appendChild(this.#getTemplate().content.cloneNode(true))

  }
  #getTemplate(){
    const template =document.createElement('template')
    for(const {id,description,price} of products){
        const productItem = new ProductItem(description,price);
        productItem.setAttribute('data-id',id)
        template.content.appendChild(productItem)
    }
    return template;
  }
}