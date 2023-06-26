   /* var humano={
        genero:'masculino'
    };

    var pessoa={
        __proto__: humano
    } 

    console.log(pessoa.genero)

    //Não temos classes, mas sim funções construtoras


    function Pessoa(nome, genero, idade){
        this.nome=nome;
        this.genero=genero;
        this.idade=idade;
    }

    Pessoa.prototype.falar = function(){
        console.log(`Meu nome é ${this.nome}`)
    }

    const Andre = new Pessoa('Andre', 'masculino',20)

    Andre.falar()
*/
    class Pessoa{
        constructor(nome, genero, idade){
            this.nome=nome;
            this.genero=genero;
            this.idade=idade;
        }
        falar(){
            console.log(`Meu nome é ${this.nome}`)
        }
    }

    const Andre = new Pessoa('Andre','feminino',18)
   // console.log(Andre)
    Andre.falar()

    function Pessoa1(idade, nome) {
        this.nome = nome;
        this.idade = idade;
        this.falar = function() {
            console.log(`Meu nome é ${this.nome}`);
        }
    }

    gui ={
        genero:'masculino'
    }

    Pessoa1.call(gui, 18, 'Guilherme')

    console.log(gui)
    gui.falar()


    String.prototype.toPLang = function(){
        return `P ${this}`
    }
    
    console.log('teste'.toPLang())