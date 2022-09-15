var exception = 'Algo está errado!';
function soma(){
    var a = parseInt(document.getElementById('a').value);
    var b = parseInt(document.getElementById('b').value);
    var soma = a + b;
    document.getElementById('resultado').innerHTML = 'Resultado = ' + soma;
}
function soma2(){
    var a = parseInt(prompt("Informe um número"))
    var b = parseInt(prompt("Informe outro número"))
    var soma2 = a + b;
    alert('soma = '+soma2)
    //document.getElementById('resultado').innerHTML = 'Resultado = ' + soma2;
}

function tamanho(){
    var a = parseInt(prompt("Informe o primeiro número"))
    var b = parseInt(prompt("Informe o segundo número"))
    var c = parseInt(prompt("Informe o terceiro número"))
    if(a >= 0 && b >= 0 && c >= 0){
    if(a > b && a > c){
        alert('O maior tamanho é ' + a)
    }
    if(b > a && b > c){
        alert('O maior tamanho é ' + b)
    }
    if(c > b && c > a){
        alert('O maior tamanho é ' + c)
    }
    }else{
        alert(exception)
    }
}

function verificar(){
    var x = parseInt(prompt("Informe sua idade: "))
    if(x > 0 && x <100){
        if(x <= 17){
            alert('Você é menor de idade ')
        }else{
            alert('Você é maior de idade ')
        }
    }else{
        alert(exception)
    }
}

function conferir(){
    var s = parseFloat(prompt("Informe seu peso(em quilogramas): "))
    var u = parseFloat(prompt("Informe sua altura(em metros): "))
    if(s > 0 && u > 0){
        var i = s/(u*u);
        document.getElementById('imc').innerHTML = 'Seu IMC é igual a ' + i;
    }else{
        alert(exception)
    }
}