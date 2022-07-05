import JobBox from "./JobBox"
import Link from 'next/link'
import {Link as A} from 'theme-ui'
import styles from "../../styles/JobList.module.css"

const JobList = ({items}) => {
    return <div className={styles.container}>
        
        {
            items.map((item,index) => (
                <Link href="/career/demo" key={item.id}>
                    <a>
                        <JobBox key={item.id} title={item.title} contentHeader={item.contentHeader} isOpen={item.isOpen}/>
                    </a>
                </Link>
            ))
        }
        
        
    </div>
}

export default JobList