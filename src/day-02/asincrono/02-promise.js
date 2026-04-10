class Customer{
    static get(id){
        return new Promise((resolve,reject)=>{
            if(id===1){
                resolve({id})
            }
            else{
                reject("El cliente no existe")
            }
        })
    }
}

class Invoice{
    static get(clientId){        
        return new Promise((resolve,reject)=>{
            if(clientId===1){
                resolve({clientId,invoices:[]})
            }
            else{
                reject("El cliente no tiene facturas")
            }
        })
    }
}


//resulve->then(1:n)
//reject->catch(1)
function main(id){
    //spinner on
   Customer.get(id)
    .then(({id})=>Invoice.get(id))
    .then(invoices=>console.log(invoices))
    .catch(err=>console.log(error))
    .finally(()=>{}) //spionner off)
}

main(1)