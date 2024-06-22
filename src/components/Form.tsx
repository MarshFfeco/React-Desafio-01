import './Form.css'

import plus from '../assets/plus.svg'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

interface FormProps {
    onCreateTask: (comment: string) => void
}

export default function Form({ onCreateTask }: FormProps) {
    const [newTask, setnewTask] = useState("");

    function HandleAddTask(event: FormEvent) {
        event.preventDefault();

        onCreateTask(newTask);
        setnewTask("");
    }

    function HandleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity("Campo obrigatorio");
    }

    function HandleTaskChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity("");
        setnewTask(event.target.value);
    }

    return (
        <form className='Form' onSubmit={HandleAddTask}>
            <input
                onChange={HandleTaskChange}
                onInvalid={HandleNewTaskInvalid}
                value={newTask}
                type="text"
                placeholder='Adicione uma nova tarefa'
                required />
            <button type='submit'>Criar <img src={plus} alt="icon de adicionar" /></button>
        </form>
    );
}