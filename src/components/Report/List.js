import { } from "bootstrap";
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
        <tbody>
            {
                itemsList.map((item) => (
                    <ReportRow
                        key={item.id}
                        id={item.id}
                        data={item.data}
                        descricao={item.descricao}
                        valor={item.valor}
                        onRemove={handleRemoveItem}
                    />
                ))
            }
        </tbody>
    );
}

export default ReportList;