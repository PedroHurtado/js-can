export const events=(node,event,cb)=>{
    node.addEventListener(event,cb)
    return ()=> node.removeEventListener(event,cb)
}


export class Carrito extends HTMLElement{

    #disposables = []
    #items = []
    #div;
    constructor(){
        super();
        const shadow = this.attachShadow({mode:'open'})
        this.#div = document.createElement('div')
        this.#setTotal(0)
        shadow.appendChild(this.#div)
        this.#suscribeCarritoEvent();
    }
    #suscribeCarritoEvent(){
        const disposable = events(document,'carrito',this.#handlerCarrito.bind(this))
    }
    #handlerCarrito(ev){
        this.#items.push(ev.detail)
        ev.stopPropagation();
        const total = Service.getTotal(this.#items)
        this.#setTotal(total)
    }
    #setTotal(total){
        this.#div.textContent = total;
    }
}

class Service{
    static getTotal(products){
        return products.reduce((a,product)=>a+product.price,0)
    }
}

customElements.define('canarias-carrito', Carrito)