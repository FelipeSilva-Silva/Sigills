import { } from "bootstrap";
import supabase from "../../services/Api";

const ReportRow = (props) => {

    const removeItem = (item) => {
        async function remove() {
            try {
                const { error } = await supabase
                    .from('entradas')
                    .delete()
                    .eq('id', props.id)
                if (error) {
                    throw error
                }
            } catch (error) {
                alert("Erro ao excluir")
            }
        }
        props.onRemove();
        remove();
    }

    return (
        <tr key={props.id}>
            <td>
                {props.data}
            </td>
            <td>
                {props.descricao} (<a href="#" onClick={removeItem}>excluir</a>)
            </td>
            <td>
                R$ {props.valor}
            </td>
        </tr>
    );
}

export default ReportRow;