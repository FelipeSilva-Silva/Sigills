import { } from "bootstrap";
import { Card } from "react-bootstrap";
import './style.css'
import { MdAccountBalance } from "react-icons/md";
import api from "../../services/Api";

const AccountCard = (props) => {

    const removeItem = (item) => {
        async function remove() {
            
            api.delete(`creditCard/${props.id}`)
            .then((response) => {
                console.log("response: " + response.status);
                console.log("data: " + response.data);
                
            })
            
            // try {
            //     const { error } = await api
            //         .from('contas')
            //         .delete()
            //         .eq('id', props.id)
            //     if (error) {
            //         throw error
            //     }
            // } catch (error) {
            //     alert("Erro ao excluir")
            // }
        }
        props.onRemove();
        remove();
    }

    return (
        <Card key={props.id} className="sizeCard">
            <Card.Body>
                <Card.Title>{props.apelido}</Card.Title>
                <div className="cardStyle">
                    <MdAccountBalance style={{ fontSize: '40px', color: '#E9EE00' }} />
                    <Card.Text>
                        <span>Saldo</span>
                        <br />
                        <strong style={{ fontSize: '20px' }}>R$ {props.saldo_inicial}</strong>
                    </Card.Text>
                </div>
            </Card.Body>
            <Card.Body>
                <Card.Link href="#" onClick={removeItem}>Excluir</Card.Link>
            </Card.Body>
        </Card>
    );
}

export default AccountCard;