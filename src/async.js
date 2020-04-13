
const mypromis = new Promise((resolve,rejected)=>{
    if (true){
        setTimeout(() => {
            resolve('I have Success');
        }, 1000);

    }else{
        rejected('I Rejected');
        
    }
})

mypromis.then( value=>console.log(value)).catch(rejectedvalue=>console.log(rejectedvalue));

