import { } from "bootstrap";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import './style.css'


const CreditCard = (props) => {

    const removeItem = (item) => {
    //     async function remove() {
    //         try {
    //             const { error } = await supabase
    //                 .from('cartoes')
    //                 .delete()
    //                 .eq('id', props.id)
    //             if (error) {
    //                 throw error
    //             }
    //         } catch (error) {
    //             alert("Erro ao excluir")
    //         }
    //     }
    //     props.onRemove();
    //     remove();
    }

    return (
        <Card className="sizeCard">
            <Card.Body >
                <Card.Title>{props.title}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Fechamento: dia {props.fechamento}</ListGroupItem>
                <ListGroupItem>Vencimento: dia {props.vencimento}</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#" onClick={removeItem}>Excluir</Card.Link>
            </Card.Body>
        </Card>
    );
}

export default CreditCard;