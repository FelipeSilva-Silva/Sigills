import { } from "bootstrap";
import { Card } from "react-bootstrap";
import './cardStyle.css'
import { ImCircleUp, ImCircleDown } from "react-icons/im";
import { MdAccountBalance } from "react-icons/md";
import { BsFillCreditCardFill } from "react-icons/bs";
import money from '../assets/payments_black_24dp 1.svg';
import logo from '../assets/nubank.png';
import brand from '../assets/mastercard.png';

const Cards = (props) => {
    return (

        <Card className="sizeCard">

            <Card.Body >
                {
                    props.name === 'Entradas' &&
                    (<>
                        <Card.Title>{props.name}</Card.Title>
                        <div className="cardStyle">
                            <Card.Text >
                                <strong style={{ fontSize: '20px' }}> $0.000.000,00</strong>
                            </Card.Text>
                            <ImCircleUp style={{ fontSize: '40px', color: '#00B312' }} />
                        </div></>)
                }
                {
                    props.name === 'Saídas' &&
                    (<>
                        <Card.Title>{props.name}</Card.Title>
                        <div className="cardStyle">
                            <Card.Text>
                                <strong style={{ fontSize: '20px' }}> $0.000.000,00</strong>
                            </Card.Text>
                            <ImCircleDown style={{ fontSize: '40px', color: '#FF0000' }} /></div></>)

                }
                {
                    props.name === 'Contas' &&
                    (<>
                        <Card.Title>{props.name}</Card.Title>
                        <div className="cardStyle">
                            <Card.Text>
                                <strong style={{ fontSize: '20px' }}> $0.000.000,00</strong>
                            </Card.Text><MdAccountBalance style={{ fontSize: '40px', color: '#E9EE00' }} /></div></>)

                }
                {
                    props.name === 'Cartão de Crédito' &&
                    (<>
                        <Card.Title>{props.name}</Card.Title>
                        <div className="cardStyle">
                            <Card.Text>
                                <strong style={{ fontSize: '20px' }}> $0.000.000,00</strong>
                            </Card.Text><BsFillCreditCardFill style={{ fontSize: '40px', color: '#1DA0FF' }} /></div></>)

                }
                {
                    props.name === 'Carteira' &&
                    (<>
                        <Card.Title>{props.name}</Card.Title>
                        <div className="cardStyle">
                            <img
                                className="rounded-circle"
                                src={money}
                                alt=""
                                style={{ height: '2.8em' }}
                            />
                            <Card.Text ><h3>Saldo</h3>
                                <strong style={{ fontSize: '20px' }}> $0.000.000,00</strong>
                            </Card.Text></div>
                    </>)

                }
                {
                    props.name === 'Nubank' &&
                    (<>
                        <Card.Title>{props.name}</Card.Title>
                        <div className="cardStyle">
                            <MdAccountBalance style={{ fontSize: '40px', color: '#E9EE00' }} />
                            <Card.Text ><h3>Saldo</h3>
                                <strong style={{ fontSize: '20px' }}> $0.000.000,00</strong>
                            </Card.Text></div>
                    </>
                    )
                }
                {
                    props.name === 'Crédito' &&
                    (<>
                        <Card.Title>{props.name}</Card.Title>
                        <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-center">
                                <img src={logo} alt="logo" className="rounded-circle" style={{ height: "2em" }} />
                                <h6 className="card-subtitle mb-2 text-muted m-2"><strong>Nubank</strong></h6>
                            </div>
                            <div className="d-flex align-items-center">
                                <img src={brand} alt="logo" style={{ height: "1.5em" }} />
                            </div>
                        </div>
                        <br />
                        <div className="d-flex justify-content-between">
                            <h5 classNameName="card-subtitle mb-2 text-muted">Fechamento da fatura</h5>
                            <h5 classNameName="card-subtitle mb-2 text-muted">28/MAR</h5>
                        </div>
                        <div className="d-flex justify-content-between">
                            <h5 className="card-subtitle mb-2 text-muted">Data de vencimento</h5>
                            <h5 className="card-subtitle mb-2 text-muted">05/ABR</h5>
                        </div>
                        <br />
                        <div className="d-flex justify-content-between align-items-end">
                            <h5 className="card-title mb-2 text-muted">Fatura</h5>
                            <h5 className="card-title mb-2 text-muted">R$ 2000,00</h5>
                        </div>
                    </>
                    )
                }





            </Card.Body>
        </Card>



    );
}

export default Cards;