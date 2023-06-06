   /*
   var alunos = ['joão','guilherme']

    alunos.push('renan')
    alunos[6]='Vinicius'

    console.log(alunos.pop())//pop é o ultimo item da array
    console.log(alunos.shift())//primeiro item
    console.log(alunos) */

    var nome = 'Guilherme Martins Leal'
    

   /* for(i=0;i<nome.length;i++){
        var letra = nome[i]
        console.log(letra)
    }*/

    /*const notas = [3,4,5,6,10];

    let soma=0;

    for(let i=0; i<notas.length;i++){
        const nota = notas[i];
        soma = soma+nota;
        
    }
    const media = soma / notas.length;
    console.log(soma)
    console.log(media) */
    

   /* const numero =10;
    for(let i = 0;i<numero; i++){
        console.log(i*numero)
    }
    */
   const numeros = [0,1,2,3,4,5,6,7,8,9,10]

   for(let i =0 ; i<numeros.length;i++){
        const numero = numeros[i]
        console.log(numero);
        if (numero%2 ===0)
            console.log('É par')
        else
            console.log('É ímpar')
   }