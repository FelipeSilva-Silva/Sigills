import { } from "bootstrap";
import './style.css'
import ReportRow from "./Row";

const ReportList = (props) => {

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
                    <ReportRow
                        key={item.id}
                        id={item.id}
                        descricao={item.descricao}
                        valor={item.valor}
                        onRemove={handleRemoveItem}
                    />
                ))
            }
        </div>
    );
}

export default ReportList;