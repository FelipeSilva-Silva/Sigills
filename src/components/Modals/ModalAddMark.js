import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

import { AiFillCalculator } from "react-icons/ai";
import { IoDocumentText } from "react-icons/io5";
import { MdAccountBalance, MdTurnedInNot } from "react-icons/md";
import { BsPinFill, BsCheckCircle } from "react-icons/bs";




const ModalAddMark = () => {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <span className="" style={{ padding: '0px 80px 0px 10px' }} onClick={handleShow}>
                Metas

            </span>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Nova Meta</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <form>
                        <div class=" input-group mb-3 border-0 border-bottom ">
                            <div class="input-group-text border-0 bg-white"><IoDocumentText style={{ fontSize: '24px' }} /></div>
                            <input type="text" class="form-control border-0" id="description" placeholder="Descrição" />
                        </div>
                        <div class="input-group mb-3 border-0 border-bottom ">
                            <div class="input-group-text border-0 bg-white"><AiFillCalculator style={{ fontSize: '24px' }} /></div>
                            <input class="form-control border-0" id="price" placeholder="R$ 0,00"></input>
                        </div>
                        <div class="mb-3 d-flex justify-content-between">
                            <div class="input-group mb-3 border-0 border-bottom me-2">
                                <div class="input-group-text border-0 bg-white"><MdAccountBalance style={{ fontSize: '24px' }} /></div>
                                <input class="form-control me-1 border-0 " id="account" placeholder="Conta"></input>
                            </div>
                            <div class="input-group mb-3 border-0 border-bottom ms-2">
                                <div class="input-group-text border-0 bg-white"><MdTurnedInNot style={{ fontSize: '24px' }} /></div>
                               
                                <Form.Select className="border-0" aria-label="Default select example">
                                    <option>Categorias</option>
                                    <option value="1">Alimentação</option>
                                    <option value="1">Saúde</option>
                                    <option value="1">Lazer</option>

                                </Form.Select>

                                

                            </div>
                        </div>
                        <div class="mb-3 d-flex justify-content-between">
                            <div class="input-group date mb-3 border-0 border-bottom me-2">
                                <input class="form-control border-0" id="date" type="date" placeholder="dd/mm/yyyy"></input>
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
                    </form>


                </Modal.Body>
                <Modal.Footer>
                    <Button className='border-0' onClick={handleClose} >
                        Fechar
                    </Button>
                    <Button className='border-0' style={{background:'#20C997'}}>Salvar</Button>
                </Modal.Footer>
            </Modal>
        </>
    );

}

export default ModalAddMark