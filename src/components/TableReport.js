import React from "react"
import { Table } from 'react-bootstrap';
import { BsFillCalendarRangeFill } from "react-icons/bs";
import { IoDocumentText } from "react-icons/io5";
import { MdAttachMoney } from "react-icons/md";


const TableReport = (props) => {

    return (
        <div className="container-fluid p-5">
            <div className="card" style={{ height: '73vh' }}>
                <div className="card-body h-100 overflow-auto">

                    <Table striped bordered hover style={{ textAlign: 'center' }} >
                        <thead>
                            <tr>
                                <th> <BsFillCalendarRangeFill /> Data</th>
                                <th> <IoDocumentText /> Descrição</th>
                                <th> <MdAttachMoney style={{ color: 'green' }} /> Valor</th>
                            </tr>
                        </thead>
                        <tbody>


                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default TableReport
