import styles from "./sing_in.module.scss";

const SignIn = () => {
  const flag = false;
  return (
    <div
      className={
        flag
          ? `${styles.form_container} ${styles.sign_in}`
          : `${styles.form_container} ${styles.active} ${styles.sign_in}`
      }
    >
      <form>
        <h1>Вход</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <a href="#">Забыли свой пароль?</a>
        <button>Вход</button>
      </form>
    </div>
  );
};

export default SignIn;
