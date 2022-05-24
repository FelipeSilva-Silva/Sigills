import { } from "bootstrap";
import './style.css'
import CreditCard from "./Card";

const CreditList = (props) => {

    const { itemsList, setItemsList } = props;

    const handleRemoveItem = (item) => {
        setItemsList(
            [...itemsList.filter(
                (task) => {
                    return task !== item
                }
            )
            ]
        );
    }

    return (
        <div className='d-flex flex-row flex-wrap w-100 m-1'>
            {
                itemsList.map((item) => (
                    <CreditCard
                        key={item.id}
                        id={item.id}
                        title={item.apelido}
                        fechamento={item.fechamento}
                        vencimento={item.vencimento}
                        onRemove={handleRemoveItem}
                    />
                ))
            }
        </div>
    );
}

export default CreditList;