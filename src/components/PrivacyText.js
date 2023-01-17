import styles from "../../styles/description.module.css";

const PrivacyText = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.summary}>{data.text}</div>
    </div>
  );
};

export default PrivacyText;
