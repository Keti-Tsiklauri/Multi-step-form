import Step1 from "./components/Step1";
import { GlobalProvider } from "./components/GlobalContext";
import styles from "./components/app.module.css";
function App() {
  return (
    <GlobalProvider>
      <div className={styles.main}>
        <Step1 />
      </div>
    </GlobalProvider>
  );
}

export default App;
