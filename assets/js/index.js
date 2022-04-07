function validaFormCadastro() {
    let nome = document.getElementById("nome");
    let email = document.getElementById("email");
    let senha = document.getElementById("password");
    let camp = document.getElementById("campC");

    if (nome.value === "" || email.value === "" || senha.value === "") {

        camp.innerHTML = "Campos em vermelho são obrigatórios";
        camp.style.color = "red";
        camp.style.fontSize = "14px";

        if (nome.value === "") {
            nome.style.borderColor = "red";
        } else {
            nome.style.borderColor = "black";
        }

        if (email.value === "") {
            email.style.borderColor = "red";
        } else {
            email.style.borderColor = "black";
        }

        if (senha.value === "") {
            senha.style.borderColor = "red";
        } else {
            senha.style.borderColor = "black";
        }

    } else {

        camp.innerHTML = "";
        alert("Cadastro efetuado com sucesso. agora entre na sua conta.")
        document.location.reload(true);
    }
}

function validaFormEntrar() {
    let email = document.getElementById("emailE");
    let senha = document.getElementById("passwordE");
    let camp = document.getElementById("camp");

    if (email.value === "" || senha.value === "") {

        camp.innerHTML = "Campos em vermelho são obrigatórios";
        camp.style.color = "red";
        camp.style.fontSize = "14px";

        if (email.value === "") {
            email.style.borderColor = "red";
        } else {
            email.style.borderColor = "black";
        }

        if (senha.value === "") {
            senha.style.borderColor = "red";
        } else {
            senha.style.borderColor = "black";
        }

    } else {
        window.location.replace("http://127.0.0.1:5500/dashboard.html");
    }
}

function validaFormTrassacao() {
    let description = document.getElementById("description");
    let price = document.getElementById("price");
    let account_oringi = document.getElementById("account_oringi");
    let account_destiny = document.getElementById("account_destiny");
    let date = document.getElementById("passwordE");

    if (description.value === "" || price.value === "" || account_oringi.value === "" || account_destiny.value === "") {

        if (description.value === "") {
            alert("Descrição é um campo obrigatório");

        }
        if (price.value === "") {
            alert("Valor é um campo obrigatório");
            console.log("esse:" + description.value)

        }
        if (account_oringi.value === "") {
            alert("Conta de Origem é um campo obrigatório");
        }
        if (account_destiny.value === "") {
            alert("Conta de destino é um campo obrigatório");
        }

    } else {
        document.location.reload(true);
    }
}

function validaFormEntradaSaidaCartao() {
    let description = document.getElementById("description");
    let price = document.getElementById("price");
    let account = document.getElementById("account");


    if (description.value === "" || price.value === "" || account.value === "") {

        if (description.value === "") {
            alert("Descrição é um campo obrigatório");
        }
        if (price.value === "") {
            alert("Valor é um campo obrigatório");
        }
        if (account.value === "") {
            alert("Conta é um campo obrigatório");
        }


    } else {
        document.location.reload(true);
    }
}

function validaFormConfig() {
    let senhaAtual = document.getElementById("senhaAtual");
    let novaSenha = document.getElementById("novaSenha");
    let repitaSenha = document.getElementById("repitaSenha");

    if (novaSenha.value != "" && repitaSenha.value === "" && senhaAtual.value != "Admin") {
        alert("Para alterar a senha os campos senha atual e repita senha devem ser preenchidos");
    } else if (novaSenha.value != "" && (repitaSenha.value === novaSenha.value) && senhaAtual.value === "Admin") {
        alert("Senha Alterada com sucesso");
    } else if (senhaAtual.value != "Admin") {
        alert("Senha é um campo obrigatório");
    }
}



