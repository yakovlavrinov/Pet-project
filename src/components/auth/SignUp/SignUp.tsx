import styles from "./sing_up.module.scss";
import type { RootState } from "../../../store/store";
import { useSelector } from "react-redux";

const SignUp = () => {
  const toggle = useSelector((state: RootState) => state.toggle.value);

  return (
    <div
      className={
        toggle
          ? `${styles.form_container} ${styles.sign_up}`
          : `${styles.form_container} ${styles.active} ${styles.sign_up}`
      }
    >
      <form>
        <h1>Создать аккаунт</h1>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Регистрация</button>
      </form>
    </div>
  );
};

export default SignUp;
