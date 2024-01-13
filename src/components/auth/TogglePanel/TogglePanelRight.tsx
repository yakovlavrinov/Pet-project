import styles from "./toggle_panel.module.scss";
import type { RootState } from "../../../redux/store/store";
import { useSelector, useDispatch } from "react-redux";
import { toggleForm } from "../../../redux/features/toggleAuth/toggleAuthSlice";

const TogglePaneleRight = () => {
  const toggle = useSelector((state: RootState) => state.toggle.value);
  const dispatch = useDispatch();

  return (
    <div
      className={
        toggle
          ? `${styles.toggle_panel} ${styles.toggle_right}`
          : `${styles.toggle_panel} ${styles.active_right} ${styles.toggle_right}`
      }
    >
      <h1>Привет, друг!</h1>
      <p>
        Зарегистрируйтесь, указав свои личные данные, чтобы использовать все
        функции сайта
      </p>
      <button className={styles.hidden} onClick={() => dispatch(toggleForm())}>
        Регистрация
      </button>
    </div>
  );
};

export default TogglePaneleRight;
