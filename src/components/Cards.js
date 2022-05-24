import { } from "bootstrap";
import { Card } from "react-bootstrap";
import './cardStyle.css'
import { ImCircleUp, ImCircleDown } from "react-icons/im";
import { MdAccountBalance } from "react-icons/md";
import { BsFillCreditCardFill } from "react-icons/bs";
import money from '../assets/payments_black_24dp 1.svg';


const Cards = (props) => {
    return (

        <Card className="sizeCard">

            <Card.Body >
                <Card.Title>{props.name}</Card.Title>
                <div className="cardStyle">
                    {
                        props.name === 'Entradas' &&
                        (<><Card.Text >
                            <strong style={{ fontSize: '20px' }}> $0.000.000,00</strong>
                        </Card.Text>
                            <ImCircleUp style={{ fontSize: '40px', color: '#00B312' }} /></>)
                    }
                    {
                        props.name === 'Saídas' &&
                        (<><Card.Text>
                            <strong style={{ fontSize: '20px' }}> $0.000.000,00</strong>
                        </Card.Text>
                            <ImCircleDown style={{ fontSize: '40px', color: '#FF0000' }} /></>)

                    }
                    {
                        props.name === 'Contas' &&
                        (<><Card.Text>
                            <strong style={{ fontSize: '20px' }}> $0.000.000,00</strong>
                        </Card.Text><MdAccountBalance style={{ fontSize: '40px', color: '#E9EE00' }} /></>)

                    }
                    {
                        props.name === 'Cartão de Crédito' &&
                        (<><Card.Text>
                            <strong style={{ fontSize: '20px' }}> $0.000.000,00</strong>
                        </Card.Text><BsFillCreditCardFill style={{ fontSize: '40px', color: '#1DA0FF' }} /></>)

                    }
                    {
                        props.name === 'Carteira' &&
                        (<>

                            <img
                                className="rounded-circle"
                                src={money}
                                alt=""
                                style={{ height: '2.8em' }}
                            />
                            <Card.Text ><h3>Saldo</h3>
                                <strong style={{ fontSize: '20px' }}> $0.000.000,00</strong>
                            </Card.Text>
                        </>)

                    }
                    {
                        props.name === 'Nubank' &&
                        (<>
                            <MdAccountBalance style={{ fontSize: '40px', color: '#E9EE00' }} />
                            <Card.Text ><h3>Saldo</h3>
                                <strong style={{ fontSize: '20px' }}> $0.000.000,00</strong>
                            </Card.Text>
                        </>
                        )
                    }


                </div>


            </Card.Body>
        </Card>



    );
}

export default Cards;