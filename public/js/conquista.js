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

function checarSemLogin(){
    alert('Faça Login para salvar suas conquistas realizadas!!')
}