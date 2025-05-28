function cadastrar() {

    var nomeVar = document.getElementById("ipt_nomeCompleto").value;
    var usernameVar = document.getElementById("ipt_Username").value;
    var email = document.getElementById("ipt_emailCadastro").value;
    var senhaVar = document.getElementById("ipt_senhaCadastro").value;
    var confirmarSenhaVar = document.getElementById("ipt_confirmarSenha").value;


    if (senhaVar != confirmarSenhaVar) {
        alert("As senhas não coincidem.");
        return;
    }


    fetch("/usuarios/cadastrar2", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            nomeServer: nomeVar,
            usernameServer: usernameVar,
            email: email,
            senhaServer: senhaVar,
        }),
    })
        .then((resposta1) => {
            if (!resposta1.ok) {
                throw new Error("Erro ao cadastrar usuário");
            }

           
            return fetch(`/usuarios/buscar-id-usuario/${email}`);
            
           
        })
        .then((resposta2) => {
            if (!resposta2.ok) {
                throw new Error("Erro ao buscar ID do usuario");
            }
            
            return resposta2.json();
        })
        .then((dados) => {
            let idUsuario = dados.idUsuario;


            return fetch("/usuarios/cadastrar", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                idUsuario: idUsuario
                }),
            })
        })
        .then((resposta3) => {
            if (!resposta3.ok) {
                throw new Error("Erro ao cadastrar usuário");
            }

            alert("Cadastro realizado com sucesso!");
            window.location.href = "login.html";
        })
        .catch((erro) => {
            console.error("Erro:", erro);
            alert("Erro no cadastro. Verifique os campos e tente novamente.");
        });
}


