import styles from "../../styles/button.module.css";
const ApplyButton = () => {
  return (
    <div className={styles.btnContainer}>
      <a
        className={styles.btn}
        href={`https://forms.gle/EXfuavL3NqLfo4HQ7`}
        target="_blank"
      >
        Apply
      </a>
    </div>
  );
};

export default ApplyButton;
