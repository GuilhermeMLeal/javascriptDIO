 let lista =[1,2,3,4,5,6,7,8,9]

 lista.forEach((value)=>{
    console.log(value+1);
 })

 console.log(lista.filter((element)=>{
    return(element%2===0);
 }))

 class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

const pessoas = [new Pessoa('Guilherme'), new Pessoa('Andre'), new Pessoa('Renan')];

const listNames = pessoas.map((element) => {
    return element.nome;
});

console.log(pessoas);
console.log(listNames);


console.log(lista.reduce((previous, current)=>{
    return previous+current;
}));



let list = [{ nome: 'Renan'}, {nome : 'Guilherme'} , {nome: 'Vitor'},{nome: 'Amanada'}]

console.log(list.map(e=>e.nome).filter((e)=> e.nome.startsWith('A')).join(' ; '));
