class Customer{
    static get(id,cb){
        if(id===1){
            cb(null,{id})
        }
        else{
            cb("El cliente no existe",null)
        }
    }
}

class Invoice{
    static get(clientId,cb){
        if(clientId===1){
            cb(null,{id,invoices:[]})
        }
        else{
            cb("El cliente no tiene facturas",null)
        }
    }
}

function main(id){
    Customer.get(id,(error,cliente)=>{
        if(!error){
            Invoice.get(cliente.id,(error,invoices)=>{
                if(!error){
                    console.log(invoices)
                }
                else{
                    console.log(error)
                }
            })
        }
        else{
            console.log(error)
        }
    })
}

main(1)