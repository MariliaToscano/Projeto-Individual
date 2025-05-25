function checar(){
    
var fkusuario = sessionStorage.ID
console.log("ID do usuário:", sessionStorage.ID)

    document.querySelectorAll('.conquistaCheck').forEach((checkbox) =>
        checkbox.addEventListener('change', (event) => {
            
            const fkconquista = event.target.value
            console.log("Checkbox clicado:", event.target.checked, "Conquista:", fkconquista, "Usuário:", fkusuario);
            if(event.target.checked){
                fetch(`conquistas/marcarTrue/${fkconquista}/${fkusuario}`,{ method: "PUT"})
            }else {
                fetch(`conquistas/marcarFalse/${fkconquista}/${fkusuario}`,{ method: "PUT"})
            }
        })
    )
}

function carregarCheckbox() {
    const fkusuario = sessionStorage.ID;

    return fetch(`/conquistas/buscarStatus/${fkusuario}`)
        .then(resposta => resposta.json())
        .then(dados => {
            for (var i = 0; i < dados.length; i++) {
                const conquista = dados[i];
                if (conquista.status === 1) {
                    const checkbox = document.querySelector(`.conquistaCheck[value="${i+1}"]`);
        
                    checkbox.checked = true;   
                }
            }
        })
        .catch(erro => {
            console.error("Erro ao carregar checkboxes:", erro);
        });
}

function checarSemLogin(){
    alert('Faça Login para salvar suas conquistas realizadas!!')
}