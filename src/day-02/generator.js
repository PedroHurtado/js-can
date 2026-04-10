function filter(array,predicate){
    const newArray=[]
    for(const value of array){
        if(predicate(value)){
            newArray.push(value)
        }
    }
    return newArray
}

const result = filter([1,2,3,4,5,6],v=>v%2===0)

//Memoria
//bloqueante
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator

function* filterGenerator(array,predicate){
    for(const value of array){
        if(predicate(value)){
            yield value
        }
    }    
}