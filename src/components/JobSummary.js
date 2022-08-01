import styles from "../../styles/description.module.css";

const JobSummary = ({ summary }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.head}>Job summary</h2>
      <div className={styles.summary}>{summary}</div>
    </div>
  );
};

export default JobSummary;
