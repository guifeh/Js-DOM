const containerListaComprados = document.getElementById("container-lista-comprados")

export function verificarListaComprados(Lista){

    if (Lista.childElementCount === 0){
        containerListaComprados.style.display = "none";
    }else{
        containerListaComprados.style.display = "block";
    }
}