import styles from '../../styles/JobBox.module.css'
import { IoIosArrowRoundForward } from 'react-icons/io' 

const JobBox = ({title,contentHeader,isOpen}) => {
    return <div className={styles.box}>
                <div className={styles.jobHeader}>
                    <div className={styles.title}>
                        {title}
                    </div>
                    <div className={styles.arrowIcon}>
                            <IoIosArrowRoundForward size="25px"/>
                    </div>
                </div>
                <div className={styles.contentHeader}>
                    {contentHeader}
                </div>
            </div>
            
}

export default JobBox