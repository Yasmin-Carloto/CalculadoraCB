function inserir(num){
    document.getElementById('resultado').innerHTML += num;
}

function numeros(i){
    const input = Array.from(document.getElementsByTagName('input'));
    for (let i = 0 ; i<input.length ; i++){
        if (input[i].classList != 'operador'){
            input[i].addEventListener('click', function(){inserir(input[i].value);})
        }
    }
}