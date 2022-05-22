import Sidebar from '../../components/Navbar/Sidebar';

const Setting = () => {
    return (

        <div class="d-flex">

            <Sidebar />

        
            <div class="container-fluid p-5">
                <div class="card" style={{ height: '73vh' }}>
                    <div class="d-flex justify-content-center card-body h-100 overflow-auto">
                        <form class="mt-5 p-5">
                            <h5 class="text-center" style={{ color: 'red' }}>
                                Se alterar algo, por favor, preencha o campo "Senha atual".
                            </h5>

                            <div class="row g-3">
                                <div class="col-12">
                                    <label for="name" class="form-label">Nome</label>
                                    <input type="text" class="form-control" id="name" value="Nome cadastrado"  />
                                </div>

                                <div class="col-12">
                                    <label for="email" class="form-label">Email</label>
                                    <input type="email" class="form-control" disabled id="email" value="you@example.com" />
                                </div>

                                <div class="col-md-6">
                                    <label for="country" class="form-label">Gênero</label>
                                    <select class="form-select" id="country" required>
                                        <option>Escolha</option>
                                        <option>Prefiro nao informar</option>
                                        <option>Masculino</option>
                                        <option>Feminino</option>
                                        <option>Não binário</option>
                                    </select>
                                </div>

                                <div class="col-md-6">
                                    <label for="state" class="form-label">Tema</label>
                                    <select class="form-select" id="state" required>
                                        <option>Claro</option>
                                        <option>Escuro</option>
                                    </select>
                                </div>

                                <div class="col-4">
                                    <label for="senhaAtual" class="form-label">Senha Atual</label>
                                    <input type="password" class="form-control" autocomplete="on" id="senhaAtual" />
                                </div>

                                <div class="col-4">
                                    <label for="novaSenha" class="form-label">Nova Senha</label>
                                    <input type="password" class="form-control" autocomplete="on" id="novaSenha" />
                                </div>

                                <div class="col-4">
                                    <label for="repitaSenha" class="form-label">Repita a nova senha</label>
                                    <input type="password" class="form-control" autocomplete="on" id="repitaSenha" />
                                </div>

                                <div class="col-4">
                                    <button class="btn btn-danger w-50">Salvar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>

    )

};

export default Setting;