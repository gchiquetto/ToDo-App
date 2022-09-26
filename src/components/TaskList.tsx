import styles from './TaskList.module.css';
import { Task } from './Task';
import { EmptyList } from './EmptyList';

interface Task{
    task: {
        id: number;
        content: string;
        status: boolean;
    }[]
}

interface OnUpdateStatus{
    onUpdateStatus : (id: number, content: string, status: boolean) => void;
}

interface OnDeleteTask{
    onDeleteTask : (id: number) => void;
}
    

export function TaskList({task, onUpdateStatus, onDeleteTask}: Task & OnUpdateStatus & OnDeleteTask){

    const tasksChecked = task.filter(item => item.status === true);

    return(
        <div className={styles.taskListContainer}>
            <div className={styles.header}>
                <div>
                    <p className={styles.taskHeaderLabel}>Tasks</p>
                    <span>{task.length}</span>
                </div>
                <div>
                    <p className={styles.doneHeaderLabel}>Done</p>
                    <span>{`${tasksChecked.length} of ${task.length}`}</span>
                </div>
            </div>
            <div className={styles.taskList}>
                { task.length > 0 ? task.map( task => <Task key={task.id} 
                                                            content={task} 
                                                            onUpdateStatus={ onUpdateStatus }
                                                            onDeleteTask = {onDeleteTask} />
                                            ) : <EmptyList />}
            </div>
        </div>
    )
}