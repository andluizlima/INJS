var botao = document.getElementById("botao");
var lista = document.getElementById("lista");

botao.addEventListener('click', function (){
    var novoTexto = prompt("Insira a nova tarefa");
    var li = document.createElement('li');
    li.innerHTML = novoTexto + '<button class="excluir">X</button> - <button class="editar">EDITAR</button>';
    lista.appendChild(li);

    $(".excluir").click(function(event){
        event.target.parentNode.remove();
    });

    $(".editar").click(function(event){
        var novoTexto = prompt("Reformule a tarefa");
        var li = document.createElement('li');
        li.innerHTML = novoTexto + '<button class="excluir">X</button> - <button class="editar">EDITAR</button>';
        lista.replaceChild(li.node, event.target.parentNode);
    });
});

