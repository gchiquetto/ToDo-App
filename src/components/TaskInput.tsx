import styles from './TaskInput.module.css';
import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

interface OnCreateNewTask{
    onCreateNewTask : (taskContent: string) => void;
}

export function TaskInput({onCreateNewTask} : OnCreateNewTask){

    const [temporaryTask, setTemporaryTask] = useState('');
    const btnDisabled = temporaryTask === '' ? true : false;

    function handleCreateTemporaryTask( event: ChangeEvent<HTMLInputElement> ){
        event.target.setCustomValidity('');
        setTemporaryTask(event.target.value);
    }

    function handleCreateTask(event: FormEvent<HTMLFormElement>){
        event.preventDefault();
        onCreateNewTask(temporaryTask);
        setTemporaryTask('');
    }

    function handleInvalidMessage(event: InvalidEvent<HTMLInputElement>){
        event.target.setCustomValidity('Please write a task, empty field is not allowed :(');
    }


    return(
        <form className={styles.taskForm} onSubmit={ handleCreateTask } >
            <input 
                onChange={ handleCreateTemporaryTask } 
                value={temporaryTask} 
                type="text" 
                placeholder="Add a new task"
                required
                onInvalid={ handleInvalidMessage }
            />
            <button type="submit" disabled={btnDisabled}>Create <PlusCircle size={16} weight="bold" /></button>
        </form>
    );
}