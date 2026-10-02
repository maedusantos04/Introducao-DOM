function adicionarTarefa() {
    const input = document.querySelector("#novaTarefa")
    const mensagem = document.querySelector("#mensagem")
    const listaTarefas = document.querySelector("#listaTarefas")

    if(input.value === ""){
        mensagem.textContent = "Digite uma tarefa.";
        return;
    } else {
        mensagem.textContent = ""
    }

    const tarefa = document.createElement("li");

    const botaoRemover = document.createElement("button")

    botaoRemover.textContent = "Remover";

    botaoRemover.onclick = function () {
        tarefa.remove();
    }

    tarefa.textContent = input.value;
    tarefa.appendChild(botaoRemover);
    listaTarefas.appendChild(tarefa)
    input.value = ""
}