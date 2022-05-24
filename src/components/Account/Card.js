import { } from "bootstrap";
import { Card } from "react-bootstrap";
import './style.css'
import { MdAccountBalance } from "react-icons/md";

const AccountCard = (props) => {
    return (
        <Card className="sizeCard">
            <Card.Body >
                <Card.Title>{props.name}</Card.Title>
                <div className="cardStyle">
                    {
                        props.name === 'Nubank' &&
                        (<>
                            <MdAccountBalance style={{ fontSize: '40px', color: '#E9EE00' }} />
                            <Card.Text ><h3>Saldo</h3>
                                <strong style={{ fontSize: '20px' }}> $ {props.value}</strong>
                            </Card.Text>
                        </>
                        )
                    }

                </div>
            </Card.Body>
        </Card>
    );
}

export default AccountCard;