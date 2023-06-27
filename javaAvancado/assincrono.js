


const promessaNumber = new Promise((resolve,reject)=>{

    setTimeout(()=>{
        const random = parseInt(Math.random() * 100);
        resolve (random);
    },100)

    
 });

 promessaNumber.then((value)=>{
    console.log(value)
 }) 
 .catch((error)=>{
    console.error(error)
 })
 .finally(()=>{
    console.log('Deu certo!!')
 })

