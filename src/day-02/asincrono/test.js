
console.log("Start")  //sincronos
setTimeout(()=>console.log("Timeout"),0) //stack->Task
Promise.resolve()
    .then(()=>console.log("Promise1"))  //stack->MicroTask
    .then(()=>console.log("Promise2"))  
console.log("End") //sincronos


[1,2,3].map(v=>v*v) //sincrono

//¿En que orden se va a imprimir esto?

//Start
//Promise1
//Promise2


//Start,Timeout,End,Promise1,Promise2
//Start,Promise1,Promise2,End,Timeout

//Start,End,Promise1,Promise2,Timeout

//https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/
//https://www.reddit.com/r/programming/comments/9v8qlg/best_explanation_of_javascript_timers_event_loop/
//https://developer.mozilla.org/es/docs/Web/API/Worker
