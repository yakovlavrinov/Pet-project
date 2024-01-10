import styles from "./toggle_panel.module.scss";

const TogglePaneleRight = () => {
  const flag = false;
  return (
    <div
      className={
        flag
          ? `${styles.toggle_panel} ${styles.toggle_right}`
          : `${styles.toggle_panel} ${styles.active} ${styles.toggle_right}`
      }
    >
      <h1>Привет, друг!</h1>
      <p>
        Зарегистрируйтесь, указав свои личные данные, чтобы использовать все
        функции сайта
      </p>
      <button className="hidden" id="register">
        Регистрация
      </button>
    </div>
  );
};

export default TogglePaneleRight;
