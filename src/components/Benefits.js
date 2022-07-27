import styles from '../../styles/description.module.css'

const Benefits = ({benefits}) => {

    
    return <div className={styles.container}>
        <h2 className={styles.head}>
            benefits & perks
        </h2>
        <ul>
            {
                benefits.map((item,index) => (
                    <li key={index} className={styles.summary}>{item}</li>
                ))
            }
        </ul>
    </div>
}

export default Benefits