import styles from "./sing_up.module.scss";

const SignUp = () => {
  const flag = false;

  return (
    <div
      className={
        flag
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
