import styles from './Task.module.css';
import { Circle, CheckCircle, Trash } from 'phosphor-react';
import { useState } from 'react';

interface Task{
    content: {
        id: number;
        content: string;
        status: boolean;
    }
  }

interface OnUpdateStatus{
    onUpdateStatus : (id: number, content: string, status:boolean) => void;
}

interface OnDeleteTask{
    onDeleteTask : (id: number) => void;
}


export function Task({content, onUpdateStatus, onDeleteTask} : Task & OnUpdateStatus & OnDeleteTask) {

    function handleStatusTask(){
        onUpdateStatus(content.id, content.content, content.status);
    }

    function handleDeleteTask(){
        onDeleteTask(content.id);
    }

    return(
        <div className={styles.taskContainer} >
            <div className={styles.checkBtn} onClick={ handleStatusTask }>
                {!content.status ? <Circle size={24} /> : <CheckCircle className={styles.checkedIcon} weight="duotone" size={24} /> }
            </div>
            <p className={content.status ? styles.taskChecked : styles.taskUnchecked}>{ content.content }</p>
            <div className={styles.deleteBtn}  onClick={ handleDeleteTask }>
                <Trash className={styles.icon} size={24} />
            </div>
        </div>
    );
};