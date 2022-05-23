import { Col, Form } from 'react-bootstrap';
import Sidebar from '../../components/Navbar/Sidebar';

const Setting = () => {
    return (

        <div className="d-flex flex-row w-100">

            <Sidebar />
            <div className='flex-column'>
                <div className='w-100'>

                    <div className='w-100'>
                        <div className='d-flex flex-column w-100'>
                            <div className='d-flex col-lg-12 m-0 p-0 px-md-4'>
                                <div className='d-flex w-100 justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom'>
                                    <h2 style={{ color: 'black' }}>Configurações</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid p-5">
                    <div className="card" style={{ height: '73vh' }}>
                        <div className="d-flex justify-content-center card-body h-100 overflow-auto">
                            <form className="mt-5 p-5">
                                <h5 className="text-center" style={{ color: 'red' }}>
                                    Se alterar algo, por favor, preencha o campo "Senha atual".
                                </h5>

                                <div className="row g-3">
                                    <div className="col-12">
                                        <Form.Label>Nome</Form.Label>
                                        <Form.Control type="text" defaultValue='Nome Cadastrado' />
                                    </div>

                                    <div className="col-12">
                                        <Form.Label>Nome</Form.Label>
                                        <Form.Control type="email" Value='user@gmail.com' disabled />
                                    </div>

                                    <div className="col-md-6">

                                        <Form.Group as={Col} controlId="formGridState">
                                            <Form.Label>Gênero</Form.Label>
                                            <Form.Select defaultValue="Escolha">
                                                <option>Prefiro nao informar</option>
                                                <option>Masculino</option>
                                                <option>Feminino</option>
                                                <option>Não binário</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </div>

                                    <div className="col-md-6">


                                        <Form.Group as={Col} controlId="formGridState">
                                            <Form.Label>Tema</Form.Label>
                                            <Form.Select defaultValue="Claro">
                                                <option>Claro</option>
                                                <option>Escuro</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </div>

                                    <div className="col-4">
                                        <Form.Group as={Col} controlId="formGridPasswordCurrent">
                                            <Form.Label>Senha</Form.Label>
                                            <Form.Control type="password" placeholder="Senha Atual" />
                                        </Form.Group>
                                    </div>

                                    <div className="col-4">
                                        <Form.Group as={Col} controlId="formGridPasswordNew">
                                            <Form.Label>Nova Senha</Form.Label>
                                            <Form.Control type="password"/>
                                        </Form.Group>
                                    </div>

                                    <div className="col-4">
                                        <Form.Group as={Col} controlId="formGridPasswordRepeat">
                                            <Form.Label>Repita a nova senha</Form.Label>
                                            <Form.Control type="password" />
                                        </Form.Group>
                                    </div>

                                    <div className="col-4">
                                        <button className="btn btn-danger w-50">Salvar</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

};

export default Setting;