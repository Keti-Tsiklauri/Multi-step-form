import styles from "./goBackButton.module.css";
function GoBackButton({ onClick }) {
  return (
    <div>
      <p className={styles.button} onClick={onClick}>
        Go Back
      </p>
    </div>
  );
}
export default GoBackButton;
