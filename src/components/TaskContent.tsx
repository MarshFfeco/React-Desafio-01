import { useState } from 'react';
import './TaskContent.css'

import { FaTrash } from "react-icons/fa";

interface TaskProop {
    id: number,
    content: string
}

interface TaskContentProop {
    content: TaskProop,
    handleDeleteTask: (id: number) => void
    handleChangeTask: (id: number, isComplete: boolean) => void
}

export default function TaskContent({ content, handleDeleteTask, handleChangeTask }: TaskContentProop) {
    const [isComplete, setIsComplete] = useState(false);

    function HandleCheckBox() {
        setIsComplete(isComplete => !isComplete)
        handleChangeTask(content.id, !isComplete);
    }


    return (
        <article key={content.id} className="Task-Content">
            <input type="checkbox" checked={isComplete} onChange={HandleCheckBox} />
            <p className={isComplete ? "Task-Content-complete" : ""}>{content.content}</p>
            <button type="button" onClick={() => handleDeleteTask(content.id)}><FaTrash size={14} /></button>
        </article>
    );
}