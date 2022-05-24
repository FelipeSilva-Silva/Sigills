import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Sidebar from '../../components/Navbar/Sidebar';
import supabase from '../../services/Api';
import { BsFillCalendarRangeFill } from "react-icons/bs";
import { IoDocumentText } from "react-icons/io5";
import { MdAttachMoney } from "react-icons/md";
import ReportList from '../../components/Report/List';


function Report() {

    const [transitions, setTransitions] = useState([]);
    // const [enableEntries, setEnableEntries] = useState(false);
    // const [enableExits, setEnableExits] = useState(false);

    useEffect(
        () => {
            async function loadTransitions() {
                try {
                    let { data: entradas, error } = await supabase
                        .from('entradas')
                        .select("*");


                    let { data: saidas, errorExits } = await supabase
                        .from('saidas')
                        .select("*");

                    if (error || errorExits) {
                        throw error;
                    }

                    if (entradas) {
                        setTransitions(Array.prototype.concat(entradas, saidas.map(
                            (saida) => {
                                saida.valor *= -1;
                                return saida;
                            }
                        )));
                    }
                } catch (error) {
                    alert("Erro ao carregar movimentações");
                    console.log(error);
                }
            }

            loadTransitions();
        }
    );

    return (
        <div className='d-flex flex-row w-100'>
            <Sidebar />

            <div className='w-100'>

                <div className='w-100'>
                    <div className='d-flex flex-column w-100'>
                        <div className='d-flex col-lg-12 m-0 p-0 px-md-4'>
                            <div className='d-flex w-100 justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom'>
                                <h2 style={{ color: 'black' }}>Relatório</h2>

                            </div>
                        </div>
                    </div>
                </div>

                <div className='d-flex flex-column'>

                    <div className='d-flex flex-row justify-content-center'>

                        <div className="form-control form-switch ps-3 border-0 d-flex justify-content-between " style={{ width: '150px', background: 'transparent' }} >
                            <label className="form-check-label" htmlFor="status">Entradas</label>
                            <input className="form-check-input md-5" type="checkbox" role="switch" id="status" />
                        </div>
                        <div className="form-control form-switch ps-3 border-0 d-flex justify-content-between " style={{ width: '150px', background: 'transparent' }} >
                            <label className="form-check-label" htmlFor="status">Saídas</label>
                            <input className="form-check-input md-5" type="checkbox" role="switch" id="status" />
                        </div>


                    </div>

                </div>

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
                                <ReportList
                                    itemsList={transitions}
                                    setItemsList={setTransitions}
                                />
                            </Table>
                        </div>
                    </div>
                </div>

            </div>
        </div>








    )

}

export default Report;

