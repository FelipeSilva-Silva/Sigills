import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import iconGmail from '../../assets/icons8-google-logo.svg'
import './style.css'

import supabase from '../../services/Api'


function Login() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    async function handleLogin(e) {
        e.preventDefault();
        const usu = { email, password };

        try {
            let { data: user, error, status } = await supabase
                .from('users')
                .select(`*`)
                .eq('email', usu.email)
                .eq('senha', usu.password)
                .single()

            if (error && status !== 406) {
                throw error
            }

            if (user) {
                navigate('/Dashboard');

            } else if (email === "" && password === "") {

                let email = document.getElementById("emailE");
                email.style.borderColor = "red";
                let senha = document.getElementById("passwordE");
                senha.style.borderColor = "red";

                let camp = document.getElementById("camp");
                camp.innerHTML = "Os campos em vermelho devem ser prenchidos";
                camp.style.color = "red";
                camp.style.fontSize = "14px";

            } else if (email === "") {

                let email = document.getElementById("passwordE");
                email.style.borderColor = "red";

                let camp = document.getElementById("camp");
                camp.innerHTML = "Os campos em vermelho devem ser prenchidos";
                camp.style.color = "red";
                camp.style.fontSize = "14px";

            } else if (password === "") {

                let senha = document.getElementById("passwordE");
                senha.style.borderColor = "red";

                let camp = document.getElementById("camp");
                camp.innerHTML = "Os campos em vermelho devem ser prenchidos";
                camp.style.color = "red";
                camp.style.fontSize = "14px";

            } else {
                let camp = document.getElementById("camp");
                camp.innerHTML = "Login ou senha inválidos";
                camp.style.color = "red";
                camp.style.fontSize = "14px";

            }

        } catch (error) {
            alert("Login ou senha inválidos")
        }
    }


    async function signInWithEmail(e) {
        e.preventDefault();
        const usu = { email, password };

        const insert = {
            nome: usu.name,
            email: usu.email,
            senha: usu.password
        }

        try {
            const { error } = await supabase
                .from('users')
                .insert([insert]);
            if (error) {
                throw error
            }
        } catch (error) {
            alert(error.message)
        }


    }

    return (
        <div class="container">
            <div class="content row ">

                <div class="col">
                    <h1>Sigills</h1>
                    <h3>Melhor gerenciador das suas finanças</h3>
                </div>

                <form class="col text-center">
                    <div id="camp" ></div>
                    <div class="form-login">
                        <div class="form-floating mb-3">
                            <input
                                type="email"
                                class="form-control"
                                id="emailE"
                                placeholder="name@example.com"
                                onChange={e => setEmail(e.target.value)}
                                value={email}
                            />
                            <label for="email">E-mail</label>
                        </div>
                        <div class="form-floating">
                            <input
                                type="password"
                                class="form-control"
                                id="passwordE"
                                placeholder="Password"
                                onChange={e => setPassword(e.target.value)}
                                value={password}
                            />
                            <label for="floatingPassword">Senha</label>
                        </div>

                        <button class=" w-100 mt-2 py-2 btn btn-outline-success" onClick={handleLogin}>Entrar</button>

                        <button class="w-100 mt-2 py-2 mb-2 btn btn-outline-secondary rounded-2" type="submit">
                            <img class="bi me-1"
                                width="16"
                                height="16"
                                src={iconGmail} alt="Icone Gmail"
                            />
                            Entrar com o Google
                        </button>

                        <p class="mt-1">esqueceu a senha?</p>
                        <hr class="my-4" />

                        <button type="button" class="w-100 btn btn-primary" data-bs-toggle="modal" data-bs-target="#singup">
                            Cadastrar-se
                        </button>

                        <div class="modal fade" id="singup" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                            aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="staticBackdropLabel">Novo Usuário</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div id="campC" ></div>
                                    <div class="modal-body">
                                        <div class="form-floating mb-3">
                                            <input type="text"
                                                class="form-control rounded-4"
                                                id="nome"
                                                placeholder="nome"
                                                value={name}
                                                onChange={e => setName(e.target.value)}
                                            />
                                            <label for="nome">Nome</label>
                                        </div>

                                        <div class="form-floating mb-3">
                                            <input type="email"
                                                class="form-control rounded-4"
                                                id="email"
                                                placeholder="name@example.com"
                                                value={email}
                                                onChange={e => setEmail(e.target.value)}
                                            />
                                            <label for="email">E-mail</label>

                                        </div>
                                        <div class="form-floating mb-3">
                                            <input type="password"
                                                class="form-control rounded-4"
                                                id="password"
                                                placeholder="Password"
                                                value={password}
                                                onChange={e => setPassword(e.target.value)}
                                            />

                                            <label for="password">Senha</label>
                                        </div>
                                        <hr class="my-4" />
                                        <h2 class="fs-5 fw-bold mb-3">Ou use essa forma</h2>

                                        <button class="w-100 py-2 mb-2 btn btn-outline-secondary rounded-2" type="submit">
                                            <img class="bi me-1"
                                                width="16"
                                                height="16"
                                                src={iconGmail} alt="Icone Gmail" />
                                            Cadastrar-se com o Google
                                        </button>

                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                                        <button type="submit" class="btn btn-primary" onClick={signInWithEmail}>Cadastrar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;