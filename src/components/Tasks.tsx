import "./Tasks.css"

import TaskContent from "./TaskContent";

import Clipboard from "../assets/Clipboard.svg"
import { useState } from "react";

interface TaskProop {
    id: number,
    content: string,
    complete: boolean
}

interface TasksProops {
    content: TaskProop[],
    onDeleteMyTask: (id: number) => void
    onChangeTask: (id: number, isComplete: boolean) => void
}

export default function Tasks({ content, onDeleteMyTask, onChangeTask }: TasksProops) {
    const [TasksComplete, setTasksComplete] = useState(0);

    function handleChangeTask(id: number, isComplete: boolean) {
        if (isComplete) {
            setTasksComplete(TasksComplete + 1)
        } else {
            setTasksComplete(TasksComplete - 1)
        }

        onChangeTask(id, isComplete);
    }

    function handleDeleteTask(id: number): void {
        const index = content.findIndex(task => task.id == id);

        if (content[index].complete)
            setTasksComplete(TasksComplete - 1)

        onDeleteMyTask(id);
    }

    function OnItemInList(): JSX.Element {
        if (content.length > 0) {
            return <p></p>
        } else {
            return (
                <div className="Tasks-Lists-No-Content">
                    <img width="56px" src={Clipboard} alt="imagem de uma prancheta" />

                    <div className="Tasks-Lists-Message">
                        <h3>Você ainda não tem tarefas cadastradas</h3>
                        <h4>Crie tarefas e organize seus itens a fazer</h4>
                    </div>
                </div>
            )
        }
    }

    const concl = content.length > 0 ? `${TasksComplete} de ${content.length}` : "0";

    return (
        <div className="Tasks">
            <header>
                <p>Tarefas Criadas <span>{content.length}</span></p>
                <p>Concluídas <span>{concl}</span></p>
            </header>

            <div className="Tasks-Lists">
                {content.map(c => {
                    return <TaskContent content={c} handleDeleteTask={handleDeleteTask} handleChangeTask={handleChangeTask} key={c.id} />
                })}

                <OnItemInList />
            </div>
        </div >
    );
}