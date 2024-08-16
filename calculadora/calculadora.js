function insert(num) 
{
    // Obtém o conteúdo atual do elemento HTML com o ID 'resultado'.
    var numero = document.getElementById('resultado').innerHTML; 
    
    // Atualiza o conteúdo do elemento 'resultado', adicionando o número (ou símbolo) passado na função.
    document.getElementById('resultado').innerHTML = numero + num; 
}

function clean()
{
    // Limpa o conteúdo do elemento HTML com o ID 'resultado', deixando-o vazio.
    document.getElementById('resultado').innerHTML = "";
}

function back()
{
    // Obtém o conteúdo atual do elemento HTML com o ID 'resultado'.
    var resultado = document.getElementById('resultado').innerHTML; 
    
    // Atualiza o conteúdo do elemento 'resultado' removendo o último caractere (útil para a funcionalidade de "backspace").
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

