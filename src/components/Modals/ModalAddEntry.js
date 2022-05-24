import { useState, useEffect } from "react";
import { Button, Form, FormSelect, Modal } from "react-bootstrap";

import { AiFillCalculator } from "react-icons/ai";
import { IoDocumentText } from "react-icons/io5";
import { MdAccountBalance, MdTurnedInNot } from "react-icons/md";
import { BsPinFill, BsCheckCircle } from "react-icons/bs";
import supabase from "../../services/Api";

const ModalAddEntry = () => {


    const [show, setShow] = useState(false);

    const [accounts, setAccounts] = useState([]);

    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const [account, setAccount] = useState('');
    const [date, setDate] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(
        () => {
            async function loadAccounts() {
                try {
                    let { data: contas, error } = await supabase
                        .from('contas')
                        .select("*")
                        .eq('usuario', 1);

                    if (error) {
                        throw error;
                    }

                    if (contas) {
                        setAccounts(contas);
                    }
                } catch (error) {
                    alert("Erro ao carregar dados");
                    console.log(error);
                }
            }
            loadAccounts();
        }
    );

    async function handleAddItemToList(e) {
        e.preventDefault();

        if (description && value && account && date) {
            setDescription("");
            setValue("");
            setAccount("");
            setDate("");
        }

        const insert = {
            conta: account,
            descricao: description,
            valor: value,
            data: date,
        }

        try {
            const { error } = await supabase
                .from('entradas')
                .insert([insert]);
            if (error) {
                throw error
            }
        } catch (error) {
            alert(error.message)
        }

        handleClose();

    }

    return (
        <>

            <span className="" style={{ padding: '0px 80px 0px 10px' }} onClick={handleShow}>
                Entradas

            </span>


            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Nova Entrada</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <div class=" input-group mb-3 border-0 border-bottom ">
                            <div class="input-group-text border-0 bg-white"><IoDocumentText style={{ fontSize: '24px' }} /></div>
                            <input type="text" class="form-control border-0" id="description" placeholder="Descrição"
                                value={description} onChange={e => setDescription(e.target.value)} />
                        </div>
                        <div class="input-group mb-3 border-0 border-bottom ">
                            <div class="input-group-text border-0 bg-white"><AiFillCalculator style={{ fontSize: '24px' }} /></div>
                            <input class="form-control border-0" id="price" placeholder="R$ 0,00"
                                value={value} onChange={e => setValue(e.target.value)} />
                        </div>
                        <div class="mb-3 d-flex justify-content-between">
                            <div class="input-group mb-3 border-0 border-bottom me-2">
                                <div class="input-group-text border-0 bg-white"><MdAccountBalance style={{ fontSize: '24px' }} /></div>
                                <FormSelect className="border-0" value={account} onChange={e => setAccount(e.target.value)}>
                                    {
                                        accounts.map((account) => (
                                            <option key={account.id} value={account.id}>{account.apelido}</option>
                                        ))
                                    }
                                </FormSelect>
                            </div>
                            <div class="input-group mb-3 border-0 border-bottom ms-2">
                                <div class="input-group-text border-0 bg-white"><MdTurnedInNot style={{ fontSize: '24px' }} /></div>

                                <Form.Select className="border-0" aria-label="Default select example">
                                    <option>Categorias</option>
                                    <option value="">Salário</option>
                                </Form.Select>


                            </div>
                        </div>
                        <div class="mb-3 d-flex justify-content-between">
                            <div class="input-group date mb-3 border-0 border-bottom me-2">
                                <input class="form-control border-0" id="date" type="date" placeholder="dd/mm/yyyy"
                                    value={date} onChange={e => setDate(e.target.value)} />
                            </div>
                            <div class="input-group mb-3 border-0 border-bottom ms-2">
                                <div class="input-group-text border-0 bg-white"><BsPinFill style={{ fontSize: '24px' }} /></div>
                                <div class="form-control form-switch ps-3 border-0 d-flex justify-content-between">
                                    <label class="form-check-label m-0" for="type">Entrada Fixa</label>
                                    <input class="form-check-input ms-1 me-0" type="checkbox" role="switch" id="type" />
                                </div>
                            </div>
                        </div>
                        <div class="mb-3 d-flex justify-content-between">
                            <div class="input-group mb-3 border-0 me-2">
                            </div>
                            <div class="input-group mb-3 border-0 border-bottom ms-2">
                                <div class="input-group-text border-0 bg-white"><BsCheckCircle style={{ fontSize: '24px' }} /></div>
                                <div class="form-control form-switch ps-3 border-0 d-flex justify-content-between" >
                                    <label class="form-check-label" for="status">Efetivada</label>
                                    <input class="form-check-input" type="checkbox" role="switch" id="status" />
                                </div>
                            </div>
                        </div>
                    </Form>


                </Modal.Body>
                <Modal.Footer>
                    <Button className='border-0' onClick={handleClose} >
                        Fechar
                    </Button>
                    <Button className='border-0' style={{ background: '#20C997' }} onClick={handleAddItemToList}>Salvar</Button>
                </Modal.Footer>
            </Modal>

        </>
    );

}

export default ModalAddEntry