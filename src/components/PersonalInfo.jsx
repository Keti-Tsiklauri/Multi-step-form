import { useContext, useRef, useState } from "react";
import NextButton from "./NextButton";
import styles from "./personalinfo.module.css";
import { GlobalContext } from "./GlobalContext";

function PersonalInfo() {
  const { setStep, setActiveIndex, activeIndex, step } =
    useContext(GlobalContext);
  const [emptyInputs, setEmptyInputs] = useState({
    name: false,
    email: false,
    phone: false,
  });

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);

  const checkEmptyInput = (input) => input.current.value.trim() === "";

  const checkAllInput = () => {
    const nameEmpty = checkEmptyInput(nameRef);
    const emailEmpty = checkEmptyInput(emailRef);
    const phoneEmpty = checkEmptyInput(phoneRef);

    setEmptyInputs({
      name: nameEmpty,
      email: emailEmpty,
      phone: phoneEmpty,
    });

    nameRef.current.style.borderColor = nameEmpty ? "hsl(354, 84%, 57%)" : "";
    emailRef.current.style.borderColor = emailEmpty ? "hsl(354, 84%, 57%)" : "";
    phoneRef.current.style.borderColor = phoneEmpty ? "hsl(354, 84%, 57%)" : "";

    return !nameEmpty && !emailEmpty && !phoneEmpty;
  };

  const nextButton = () => {
    const inputsAreValid = checkAllInput();
    if (inputsAreValid) {
      setStep(step + 1);
      setActiveIndex(activeIndex + 1);
    }
  };

  return (
    <div className={styles.main}>
      <h2>Personal info</h2>
      <p>Please provide your name, email address, and phone number</p>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className={styles.label}>
          <label htmlFor="name">Name</label>
          {emptyInputs.name && (
            <label htmlFor="name" className={styles.required}>
              this field is required
            </label>
          )}
        </div>
        <br />
        <input
          placeholder="Name"
          type="text"
          id="name"
          required
          ref={nameRef}
        />
        <br />
        <div className={styles.label}>
          <label htmlFor="email">Email Address</label>
          {emptyInputs.email && (
            <label htmlFor="email" className={styles.required}>
              this field is required
            </label>
          )}
        </div>
        <br />
        <input
          placeholder="Email"
          type="email"
          id="email"
          required
          ref={emailRef}
        />
        <br />
        <div className={styles.label}>
          <label htmlFor="phone">Phone Number</label>
          {emptyInputs.phone && (
            <label className={styles.required} htmlFor="phone">
              this field is required
            </label>
          )}
        </div>
        <br />
        <input
          type="tel"
          id="phone"
          pattern="\+995\s\d{3}\s\d{2}\s\d{2}\s\d{2}"
          placeholder="+995 XXX XX XX XX"
          required
          ref={phoneRef}
        />
        <br />
        <div className={styles.container}>
          <NextButton onClick={nextButton} />
        </div>
      </form>
    </div>
  );
}

export default PersonalInfo;
