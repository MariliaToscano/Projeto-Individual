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
            emailServer: email,
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
            const idUsuario = dados.id;

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

function login(){
        var emailVar = ipt_emailLogin.value;
        var senhaVar = ipt_senhaLogin.value;

        if (emailVar == "" || senhaVar == "") {
            alert ('Campos em branco');
            return false;
        }
        

        console.log("FORM LOGIN: ", emailVar);
        console.log("FORM SENHA: ", senhaVar);

        fetch("/usuarios/autenticar", { 
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                emailServer: emailVar,
                senhaServer: senhaVar
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO entrar()!")

            if (resposta.ok) {
                console.log(resposta);

                resposta.json().then(json => {
                    console.log(json);
                    console.log(JSON.stringify(json));
                    sessionStorage.ID_USUARIO = json.idUsuario;
                    sessionStorage.NOME_USUARIO = json.nomeCompleto;
                    sessionStorage.USERNAME = json.username
                    sessionStorage.EMAIL_USUARIO = json.email;
                    
                  
                    

                    
                       window.location.href = "index.html";
                 

                });
                

            } else {

                console.log("Houve um erro ao tentar realizar o login!");

                resposta.text().then(texto => {
                    console.error(texto);
                });
            }

        }).catch(function (erro) {
            console.log(erro);
        })

  

}
