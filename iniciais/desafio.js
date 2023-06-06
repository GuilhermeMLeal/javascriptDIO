class Cars{
    marca;
    cor;
    gastoM;

    constructor(marca,cor, gastoM){
        this.cor=cor;
        this.marca=marca;
        this.gastoM= gastoM;
    }
    calcularViagem(distancia, precoCombustivel){
        return distancia*this.gastoM *precoCombustivel;
    }

}
(function(){
    const uno = new Cars('Ford', "Azul", 1/12);
    const palio = new Cars('Fiat','Vermelho',1/8)
    console.log(palio.calcularViagem(90,5))
    console.log(uno.calcularViagem(70,5))
})()


