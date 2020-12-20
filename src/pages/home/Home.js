import { useState } from 'react';
import HomeForm from '../../components/pages/home/HomeForm';
import HomeTable from '../../components/pages/home/HomeTable';

const Home = () => {

    const [tasks, setTasks] = useState([
        { id: 1, responsable: "Limpiar", description: "zona 1" },
        { id: 2, responsable: "Cocinar", description: "zona 2" }
    ])

    const [taskId, setTaskId] = useState(null)

    return (
        <main className="my-4 container">

            <div className="row">

                <div className="col-12 col-md-4 card card-body">
                    <HomeForm {...{ tasks, setTasks, taskId, setTaskId }} />
                </div>

                <div className="col-12 col-md-8 mt-5 mt-md-0">
                    <HomeTable {...{ tasks, setTasks, taskId, setTaskId }} />
                </div>

            </div>
        </main>
    )
}

export default Home
