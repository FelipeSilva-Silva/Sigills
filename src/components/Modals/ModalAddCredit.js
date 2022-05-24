import { useState } from "react";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import { IoDocumentText } from "react-icons/io5";
import supabase from "../../services/Api";

const ModalAddCredit = () => {


    const [show, setShow] = useState(false);
    const [description, setDescription] = useState('');
    const [closingDate, setClosingDate] = useState('');
    const [dueDate, setDueDate] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    async function handleAddItemToList(e) {
        e.preventDefault();

        if (description && closingDate && dueDate) {
            setDescription("");
            setClosingDate("");
            setDueDate("");
        }

        const insert = {
            usuario: 1,
            apelido: description,
            fechamento: closingDate,
            vencimento: dueDate,
        }

        try {
            const { error } = await supabase
                .from('cartoes')
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
                Cartão

            </span>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Novo Cartão</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Descrição"
                                value={description} onChange={e => setDescription(e.target.value)} />
                        </Form.Group>
                        <InputGroup className="mb-3">
                            <Form.Control type="number" max="31" placeholder="Fechamento"
                                value={closingDate} onChange={e => setClosingDate(e.target.value)} />
                            <Form.Control type="number" max="31" placeholder="Vencimento"
                                value={dueDate} onChange={e => setDueDate(e.target.value)} />
                        </InputGroup>
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

export default ModalAddCredit