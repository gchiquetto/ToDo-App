import styles from './EmptyList.module.css';
import { ClipboardText } from 'phosphor-react';

export function EmptyList(){
    return(
        <div className={styles.emptyListContainer}>
            <ClipboardText size={56}/>
            <div>
                <strong>You don't have any task yet</strong>
                <p>Create one and organize your day</p>
            </div>
        </div>
    )
}