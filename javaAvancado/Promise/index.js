    
    const fs = require('fs')

const PromiseLeitura = fs.promises.readFile('Promise/tarefas.csv')

async function buscarArquivo(){
    const arquivo = await fs.promises.readFile('Promise/tarefas.csv');
    const textoArquivo = arquivo.toString('utf-8')
    console.log(textoArquivo)
}

buscarArquivo()
/*
PromiseLeitura.then((arquivo)=>arquivo.toString('utf-8')).then((texto)=>console.log(texto))
.catch((error)=>{
    console.error(error)
})*/