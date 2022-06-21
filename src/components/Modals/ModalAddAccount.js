import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

import { AiFillCalculator } from "react-icons/ai";
import { IoDocumentText } from "react-icons/io5";
import { useAuth } from "../../hooks/useAuth";


const ModalAddAccount = () => {


    const [show, setShow] = useState(false);
    const [description, setDescription] = useState('');
    const [initialBalance, setInitialBalance] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const {user}  = useAuth();

    async function handleAddItemToList(e) {
        e.preventDefault();

        // if (description && initialBalance) {
        //     setDescription("");
        //     setInitialBalance("");
        // }

        // const insert = {
        //     usuario: user.id,
        //     apelido: description,
        //     saldo_inicial: initialBalance,
        // }

        // try {
        //     const { error } = await supabase
        //         .from('contas')
        //         .insert([insert]);
        //     if (error) {
        //         throw error
        //     }
        // } catch (error) {
        //     alert(error.message)
        // }

        handleClose();

    }

    return (
        <>
            <span className="" style={{ padding: '0px 80px 0px 10px' }} onClick={handleShow}>
                Conta

            </span>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Nova Conta</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form onSubmit={handleAddItemToList}>
                        <div className=" input-group mb-3 border-0 border-bottom ">
                            <div className="input-group-text border-0 bg-white"><IoDocumentText style={{ fontSize: '24px' }} /></div>
                            <input type="text" className="form-control border-0" id="description"
                                placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)} />
                        </div>
                        <div className="input-group mb-3 border-0 border-bottom ">
                            <div className="input-group-text border-0 bg-white"><AiFillCalculator style={{ fontSize: '24px' }} /></div>
                            <input className="form-control border-0" id="initialBalance"
                                placeholder="Saldo inicial" value={initialBalance} onChange={e => setInitialBalance(e.target.value)}></input>
                        </div>
                        <div className="input-group mb-3 border-0 me-2">
                        </div>
                    </form>
                </Modal.Body>

                <Modal.Footer>
                    <Button className='border-0' onClick={handleClose} >
                        Fechar
                    </Button>
                    <Button className='border-0' style={{ background: '#20C997' }}
                        onClick={handleAddItemToList}>Salvar</Button>
                </Modal.Footer>

            </Modal>
        </>
    );

}

export default ModalAddAccount