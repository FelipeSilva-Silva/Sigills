import { } from "bootstrap";
import './style.css'
import CreditCard from "./Card";

const CreditList = (props) => {

    const { itemsList } = props;

    return (
        <div className='d-flex flex-row flex-wrap w-100 m-1'>
            {
                itemsList.map((item) => (
                    <CreditCard
                        key={item.id}
                        title={item.apelido}
                        fechamento={item.fechamento}
                        vencimento={item.vencimento}
                    />
                ))
            }
        </div>
    );
}

export default CreditList;