import styles from "./toggle_panel.module.scss";

const TogglePanelLeft = () => {
  const flag = false;
  return (
    <div
      className={
        flag
          ? `${styles.toggle_panel} ${styles.toggle_left}`
          : `${styles.toggle_panel} ${styles.active} ${styles.toggle_left}`
      }
    >
      <h1>С возвращением!</h1>
      <p>Введите свои личные данные, чтобы использовать все функции сайта</p>
      <button className="hidden" id="login">
        Вход
      </button>
    </div>
  );
};

export default TogglePanelLeft;
