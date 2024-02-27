function hello() {
    window.alert("Bem-vindo ao Mundo das borboletas!");
}

function envio() {
    // Insira uma caixa de confirmação com o texto "Confirmar?"
    var confirmar = confirm("Confirmar?");
    // Se o usuário clicar em OK, retorna verdadeiro
  }
    var resposta = confirm("Deseja continuar?");
        if (resposta == true) {
          alert("Você escolheu continuar!");
        } else {
          alert("Você escolheu cancelar!");
        }
        function retorno_Funcao()
    {
     confirmar = prompt("Deseja continuar?[S/N]: ")
        if (confirmar === "S") {
         alert("Você escolheu continuar!");
        } else {
          alert("Você escolheu cancelar!");
        }
    }

let boxBuscar = document.querySelector('.buscar-box');
let lupa = document.querySelector('.lupa-buscar');
let btnFechar = document.querySelector('.btn-fechar');

lupa.addEventListener('click', ()=> {
    boxBuscar.classList.add('ativar')
})

btnFechar.addEventListener('click', ()=> {
    boxBuscar.classList.remove('ativar')
})
