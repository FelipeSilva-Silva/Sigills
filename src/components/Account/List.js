import { } from "bootstrap";
import './style.css'
import AccountCard from "./Card";

const AccountList = (props) => {

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
                    <AccountCard
                        key={item.id}
                        id={item.id}
                        apelido={item.apelido}
                        saldo_inicial={item.saldo_inicial}
                        onRemove={handleRemoveItem}
                    />
                ))
            }
        </div>
    );
}

export default AccountList;