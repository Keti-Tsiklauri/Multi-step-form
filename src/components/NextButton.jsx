import styles from "./nextButton.module.css";
function NextButton({ onClick }) {
  return (
    <div>
      <button className={styles.button} onClick={onClick}>
        Next Step
      </button>
    </div>
  );
}

export default NextButton;
