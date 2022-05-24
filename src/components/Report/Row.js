import { } from "bootstrap";
import './style.css'
import supabase from "../../services/Api";

const ReportRow = (props) => {

    const removeItem = (item) => {
        async function remove() {
            try {
                const { error } = await supabase
                    .from('contas')
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
        <th key={props.id}>
            <td>
                {props.data}
            </td>
            <td>
                {props.descricao}
            </td>
            <td>
                R$ {props.valor}
            </td>
        </th>
    );
}

export default ReportRow;