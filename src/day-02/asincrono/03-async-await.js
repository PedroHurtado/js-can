class Customer{
    static async get(id){
        if(id!==1){
            throw "El cliente no tiene facturas"
        }
        return {id}
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
async function main(id){
    
   try{
        //spinner on
        const {id} = await Customer.get(id)
        const invoices = await Invoice.get(id)
        console.log(invoices)
   }
   catch(err){
    console.log(err)
   }
   finally{
    //spinner off
   }
}

await main(1)