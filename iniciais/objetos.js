
class Pessoa {
    nome;
    idade;
    altura;

    constructor(nome, idade, altura){
        this.nome=nome;
        this.idade=idade;
        this.altura=altura;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} , minha idade é ${this.idade} e minha altura é ${this.altura}`);
    }
}
 
const guilherme = new Pessoa('Guilherme',18,1.80);
guilherme.descrever()
const sergio = new Pessoa('Sergio',19,1.90)
sergio.descrever()


function CompararPessoa(p1,p2){
    if(p1.idade>p2.idade)
        console.log(`A pessoa ${p1.nome} é mais velho(a) que a pessoa ${p2.nome}`)
    if(p2.idade>p1.idade)
        console.log(`A pessoa ${p2.nome} é mais velho(a) que a pessoa ${p1.nome}`)
    if(p1.idade==p2.idade)
        console.log(`Ambos ${p1.nome} e ${p2.nome} tem a mesma idade`)
        
}

CompararPessoa(guilherme,sergio)

/*var gui = {
    nome:'Guilherme',
    idade: 18,
    altura:0,
    descrever : function(){//variavel dentro de outra(valor)
        console.log(`Meu nome é ${this.nome} , minha idade é ${this.idade} e minha altura é ${this.altura}`);
    }    
};
gui.altura = 1.79; 
gui.descrever();

console.log(gui['nome'])
gui['nome'] = 'teste'
gui.nome='pessoa'

console.log(gui);*/

