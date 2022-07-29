import styles from '../../styles/description.module.css'

const Requirements = ({requirements}) => {

    
    return <div className={styles.container}>
        <h2 className={styles.head}>
            requirements
        </h2>
        <ul className={styles.list}>
            {
                requirements.map((item,index) => (
                    <li key={index} className={styles.summary}>{item}</li>
                ))
            }
        </ul>
    </div>
}

export default Requirements