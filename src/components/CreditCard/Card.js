import { } from "bootstrap";
import { Card } from "react-bootstrap";
import './style.css'
import { MdCreditCard } from "react-icons/md";

const CreditCard = (props) => {
    return (
        <Card className="sizeCard">
            <Card.Body >
                <Card.Title>{props.title}</Card.Title>
                <div className="cardStyle">
                    <MdCreditCard style={{ fontSize: '40px', color: 'purple' }} />
                    <Card.Text>
                        <span>Fechamento: </span>
                        <strong style={{ fontSize: '20px' }}>Dia {props.fechamento}</strong>
                        <br />
                        <span>Vencimento: </span>
                        <strong style={{ fontSize: '20px' }}>Dia {props.vencimento}</strong>
                    </Card.Text>
                </div>
            </Card.Body>
        </Card>
    );
}

export default CreditCard;