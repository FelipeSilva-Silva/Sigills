import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

import { AiFillCalculator } from "react-icons/ai";
import { IoDocumentText } from "react-icons/io5";





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
                        <div class="mb-3 d-flex justify-content-between w-50    ">
                            <div class="input-group date mb-3 border-0 border-bottom me-2">
                                <input class="form-control border-0" id="date" type="date" placeholder="dd/mm/yyyy"></input>
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