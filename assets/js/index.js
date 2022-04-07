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