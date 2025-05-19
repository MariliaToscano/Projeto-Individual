function cadastrar() {

    var nomeVar = ipt_nomeCompleto.value;
    var usernameVar = ipt_Username.value;
    var emailVar = ipt_emailCadastro.value;
    var senhaVar = ipt_senhaCadastro.value;
    var confirmarSenhaVar = ipt_confirmarSenha.value;


    if (senhaVar != confirmarSenhaVar) {
        alert("As senhas não coincidem.");
        return;
    }
 

    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            nomeServer: nomeVar,
            usernameServer: usernameVar,
            emailServer: emailVar,
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
            const idTransportadora = dados.idtransportadora;

            return fetch("/usuarios/cadastrar", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    // seria a função para cadastrar a tabela usuario_conquistas
                    emailServer: email,
                    senhaServer: senha,
                    idTransportadora: idTransportadora
                }),
            });
        })
        .then((resposta3) => {
            if (!resposta3.ok) {
                throw new Error("Erro ao cadastrar usuário");
            }

            alert("Cadastro realizado com sucesso!");
            window.location.href = "posLogin.html";
        })
        .catch((erro) => {
            console.error("Erro:", erro);
            alert("Erro no cadastro. Verifique os campos e tente novamente.");
        });
}