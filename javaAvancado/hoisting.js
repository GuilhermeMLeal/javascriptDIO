
if(num2=0){
    console.log(num2)
}else{
    console.error('error')
}

var num1 = (() => {
    num2 = 5;
    console.log(num2);
})();

var num2=3;

var num10 = {
    numeros:10,
    carro:1,
    id:10231,
    acelerar:function(){
        console.log(`Este carro está acelerando até ${this.numeros}`)
    }
};
num10.carro='Ferrari'

console.log(JSON.stringify(num10))
num10.acelerar()


//true,false // tipo primitivo

//new Boolean(true) //objeto