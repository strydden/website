import styles from '../../styles/description.module.css'

const JobResponsibilities = ({responsibilities}) => {

    return <div className={styles.container}>
        <h2 className={styles.head}>
            responsibilities
        </h2>
        <ul>
            {
                responsibilities.map((item,index) => (
                    <li key={index} className={styles.summary}>{item}</li>
                ))
            }
        </ul>
    </div>
}

export default JobResponsibilities