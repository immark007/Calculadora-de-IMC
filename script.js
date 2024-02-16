//Quero um programa que calcule o IMC de uma pessoa
 let nome = document.getElementById('nome')
 let peso = document.getElementById('peso')
 let altura = document.getElementById('altura')
 let res = document.getElementById('res')
 let apresents = document.getElementById('apresents')

 function avaliar(){
    var pesado = Number(peso.value)
    var alto = Number(altura.value)
    var pessoa = nome.value
    var calculo = pesado/alto**2
    res.innerHTML = `Olá, ${pessoa} o seu imc é ${calculo}`
    if(calculo <= '16'){
        apresents.innerHTML = `Você está muito abaixo do peso`
    }else if(calculo <= '18,4'){
        apresents.innerHTML = `você está abaixo do peso`
    }else if(calculo <= '25'){
        apresents.innerHTML = `Você está no peso ideal`
    }else if(calculo <= '30'){
        apresents.innerHTML = `Você está acima do peso`
    }else if(calculo <= '35'){
        apresents.innerHTML = `você está com obesidade grau 1`
    }else if(calculo <= '40'){
        apresents.innerHTML = `Você está com obesidade grau 2`
    }else{
        apresents.innerHTML = `Você está com obesidade grau 3`
    }
 }
