import { } from "bootstrap";
import { Card } from "react-bootstrap";
import './style.css'
import { MdAccountBalance } from "react-icons/md";

const AccountList = (props) => {

    const { itemsList } = props;

    return (
        <div className='d-flex flex-row w-100'>
            {
                itemsList.map((item) => (
                    <Card key={item.id} className="sizeCard">
                        <Card.Body>
                            <Card.Title>{item.apelido}</Card.Title>
                            <div className="cardStyle">
                                <MdAccountBalance style={{ fontSize: '40px', color: '#E9EE00' }} />
                                <Card.Text>
                                    <strong>Saldo</strong>
                                    <br />
                                    <strong style={{ fontSize: '20px' }}> $ {item.saldo_inicial}</strong>
                                </Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                ))
            }
        </div>
    );
}

export default AccountList;