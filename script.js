function inserir (num){
    const resultado = document.getElementById('resultado');
    if (resultado.innerHTML == "0"){
        if (num == "."){
            resultado.innerHTML += num;
        }
        else{
            resultado.innerHTML += num;
            resultado.innerHTML = resultado.innerHTML.substring(1);
        }
    }
    else{
        if (num == "."){
            const listaArray = Array.from(resultado.innerHTML);
            if (! listaArray.includes(".")){
                resultado.innerHTML += num;
            }
        }
        else{
            resultado.innerHTML += num;
        }
    }
}


function numeros(i){
    const input = Array.from(document.getElementsByTagName('input'));
    for (let i = 0 ; i<input.length ; i++){
        if (input[i].classList != 'operador'){
            input[i].addEventListener('click', function(){inserir(input[i].value);})
        }
    }
}

function apagar (){
    const resultado = document.getElementById('resultado');
    const tamanho = resultado.innerHTML.length;
    resultado.innerHTML = resultado.innerHTML.substring(0,tamanho-1)
}

function apagarTudo () {
    document.getElementById('resultado').innerHTML = "";
}

async function vazio(){
    const resultado = document.getElementById('resultado');
    if (Boolean(resultado.innerHTML) == false){
        resultado.innerHTML = "0"
    }
}

function limitadorDeCaracteres (){
    const resultado = document.getElementById('resultado');
    const tamanho = resultado.innerHTML.length;
    if(resultado.innerHTML.length > 7){
        resultado.innerHTML = resultado.innerHTML.substring(0, tamanho-1)
    }
}