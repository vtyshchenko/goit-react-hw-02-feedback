import styles from './Notification.module.scss'

function Notification({ message }) {
    return <p className={styles.Notification}>{message}</p>;
}


export default Notification;
