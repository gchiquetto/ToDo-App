import styles from './Header.module.css';
import { Rocket } from 'phosphor-react';
import rocket from '../assets/rocket.svg';

export function Header(){
    return (
        <header className={styles.header}>
            <img src={rocket} />
            <h1>todo</h1>
        </header>
        
    )
}