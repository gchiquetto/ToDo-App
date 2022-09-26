import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { Header } from './components/Header';
import { TaskInput } from './components/TaskInput';
import { TaskList } from './components/TaskList';
import styles from './App.module.css';
import './global.css';

interface Task{
  id: number;
  content: string;
  status: boolean;  
}

export function App() {
  const [taskId, setTaskId] = useState(1);

  const [tasks, setTasks] = useState<Task[]>([]);

  function onCreateNewTask(taskContent: string){
    const newTask = {
      id: taskId,
      content: taskContent,
      status:false
    }

    setTasks([...tasks, newTask]);
    setTaskId( taskId =>{ return( taskId + 1)});

  }

  function onDeleteTask(id: number){
      const tasksNotDeleted = tasks.filter( task => task.id !== id);

      setTasks(tasksNotDeleted);
  }

  function onUpdateStatus(id:number, content: string, status: boolean){
    const updateTask={
      id: id,
      content: content,
      status: !status
    }

    const remainedTasks = tasks.filter(task => task.id !== id);
    setTasks([...remainedTasks, updateTask]);

  }
  
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <TaskInput onCreateNewTask={ onCreateNewTask } />
        <TaskList task={tasks} onUpdateStatus={ onUpdateStatus } onDeleteTask={ onDeleteTask } />
      </main>
    </div>
  )
}
