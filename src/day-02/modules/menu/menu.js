!function(){

    document.addEventListener('click',async (ev)=>{
        
        const node = ev.composedPath().find(n=>n.dataset && 'page' in n.dataset)
        if(node){
            
            ev.preventDefault();
            ev.stopPropagation();

            const {page} = node.dataset
            const url = `./${page}.js`
            const module = await import(url);

            module.default();
        }

    })

    //https://developer.mozilla.org/en-US/docs/Web/HTML/How_to/Use_data_attributesç
    //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/import
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
    
}()

//IIEF
/*(function(){

}())*/

//funcion autoejecutable