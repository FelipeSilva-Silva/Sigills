import { } from "bootstrap";
import { Card } from "react-bootstrap";
import './cardStyle.css'
import { ImCircleUp, ImCircleDown } from "react-icons/im";


const Cards = () => {
    return (

        <Card className="sizeCard">
            <Card.Header as="h5">Entradas</Card.Header>
            <Card.Body className="cardStyle">
                <Card.Title></Card.Title>
                <Card.Text>
                    <strong> $0.000.000,00</strong>

                </Card.Text>

                <ImCircleUp />
            </Card.Body>
        </Card>



    );
}

export default Cards;