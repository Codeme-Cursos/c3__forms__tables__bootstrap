import SVGDelete from "../../shared/icons/SVGDelete"
import SVGEdit from "../../shared/icons/SVGEdit"
import Table from "../../shared/tables/Table"

const HomeTable = ({ tasks, setTaskId, taskId, setTasks }) => {

    const headers = ["id,10", "Nombre,30", "Descripción,50", "Opciones,10"]

    const deleteTask = id => {
        const result = tasks.filter(task => task.id !== id)
        setTasks(result)
    }

    return (
        <Table headers={headers}>
            {
                tasks.length > 0 &&
                tasks.map(task => (
                    <tr key={task.id}>
                        <th className="w-10">{task.id}</th>
                        <td className="w-30">{task.name}</td>
                        <td className="w-50">{task.description}</td>
                        <td className="th__table__icons w-10">
                            <span onClick={() => setTaskId(task.id)}>
                                <SVGEdit size={15} color={(taskId && task.id === taskId) && "green"} />
                            </span>
                            <span onClick={() => deleteTask(task.id)} className={(taskId) && "d-none"}>
                                <SVGDelete size={23} color="red" />
                            </span>
                        </td>
                    </tr>
                ))
            }
        </Table>
    )
}

export default HomeTable
