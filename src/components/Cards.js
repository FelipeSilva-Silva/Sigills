import { } from "bootstrap";
import { Card } from "react-bootstrap";
import './cardStyle.css'
import { ImCircleUp,ImCircleDown } from "react-icons/im";
import { MdAccountBalance } from "react-icons/md";
import { BsFillCreditCardFill} from "react-icons/bs";



const Cards = (props) => {
    return (

        <Card className="sizeCard">

            <Card.Body >
                <Card.Title>{props.name}</Card.Title>
                <div className="cardStyle">
                    <Card.Text >
                        <strong> $0.000.000,00</strong>
                    </Card.Text>
                    {
                        props.name === 'Entradas' ?
                            (<ImCircleUp style={{fontSize:'40px', color:'#00B312'}} />) : ''
                    }
                    {
                        props.name === 'Saídas' ?
                            (<ImCircleDown style={{fontSize:'40px', color:'#FF0000'}} />) : ''

                    }
                    {
                        props.name === 'Contas' ?
                            (<MdAccountBalance style={{fontSize:'40px', color:'#E9EE00'}} />) : ''

                    }
                    {
                        props.name === 'Cartão de Crédito' ?
                            (<BsFillCreditCardFill style={{fontSize:'40px', color:'#1DA0FF'}} />) : ''

                    }


                </div>


            </Card.Body>
        </Card>



    );
}

export default Cards;