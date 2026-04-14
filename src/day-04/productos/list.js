import styles from "./list.css" with  { type: "css" };

export const events=(node,event,cb)=>{
    node.addEventListener(event,cb)
    return ()=> node.removeEventListener(event,cb)
}

import { ProductItem } from "./item.js";

const products =[
    {id:1,description:'articulo1',price:1.35},
    {id:2,description:'articulo2',price:1.45},
    {id:3,description:'articulo3',price:1.62},

]
export class ListProducts extends HTMLElement{
  #disposables=[]
  constructor(){
    super();
    const shadow = this.attachShadow({mode:'open'})
    shadow.adoptedStyleSheets =[styles]
    shadow.appendChild(this.#getTemplate().content)

  }
  connectedCallback(){
    this.#disposables.push(events(this,'click',this.#handlerClick))
  }
  #handlerClick(ev){
    const node = ev.composedPath().find(n=>n.dataset && 'id' in n.dataset);
    if (node){
        const product = products.find(p=>p.id===Number(node.dataset.id))
        ev.stopPropagation();
        if(product){

            node.dispatchEvent(this.#createEvent(product))
        }        
    }
  }
  #createEvent(product){
    const event = new CustomEvent('carrito',{
        bubbles:true,
        composed:true,
        detail:structuredClone(product)
    })
    return event;
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

customElements.define('canarias-product-list', ListProducts)

