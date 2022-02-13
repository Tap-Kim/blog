import styles from './alert.module.css'
import cn from 'classnames'

const Alert = ({children, type}) => {
    return (
        <div
            className={
                cn({
                    [styles.success]: type === 'sccuess',
                    [styles.error]: type === 'error'
                })
            }
        >
            {children}
        </div>
    );
};

export default Alert;