import Form from './components/Form'
import Tasks from './components/Tasks'

import rocket from './assets/rocket.svg'

import './App.css'
import { useState } from 'react'

interface TaskProop {
  id: number,
  content: string,
  complete: boolean
}

export default function App() {
  const [MyTasks, setMyTasks] = useState<TaskProop[]>([]);

  function onCreateTask(newTask: string) {
    let newMyTask: TaskProop = {
      id: MyTasks.length > 0 ? MyTasks[MyTasks.length - 1].id + 1 : 1,
      content: newTask,
      complete: false
    }

    onUpdateMyTasks(newMyTask);
  }

  function onUpdateMyTasks(task: TaskProop) {
    setMyTasks([...MyTasks, task]);
  }

  function onDeleteMyTask(id: number) {
    const tasks = MyTasks.filter(t => {
      return t.id != id
    })

    setMyTasks(tasks)
  }

  function onChangeTask(id: number, isComplete: boolean) {
    const index = MyTasks.findIndex(task => task.id == id)

    const newTasks = [...MyTasks];
    newTasks[index].complete = isComplete;

    setMyTasks(newTasks)
  }

  return (
    <>
      <header className='Header'>
        <img src={rocket} alt="imagem de um foguete" />
        <h1><span>to</span><span>do</span></h1>
      </header>

      <main className='Main'>

        <Form onCreateTask={onCreateTask} />

        <Tasks content={MyTasks} onDeleteMyTask={onDeleteMyTask} onChangeTask={onChangeTask} />

        <footer><p>
          Made With
          <span> &#9829; </span>
          by <a className='Me' href="https://www.linkedin.com/in/anderson-borba-8861b91a2/" target='_blank'>MarshFfeco</a> <span>&#43;</span> <a className='rocketseat' href="https://www.linkedin.com/school/rocketseat/" target='_blank'>Rocketseat</a>
        </p></footer>
      </main>
    </>
  )
}
