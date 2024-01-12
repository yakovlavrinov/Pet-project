import styles from "./toggle_panel.module.scss";
import type { RootState } from "../../../store/store";
import { useSelector, useDispatch } from "react-redux";
import { toggleForm } from "../../../features/toggleAuth/toggleAuthSlice";

const TogglePanelLeft = () => {
  const toggle = useSelector((state: RootState) => state.toggle.value);
  const dispatch = useDispatch();
  return (
    <div
      className={
        toggle
          ? `${styles.toggle_panel} ${styles.toggle_left}`
          : `${styles.toggle_panel} ${styles.active_left} ${styles.toggle_left}`
      }
    >
      <h1>С возвращением!</h1>
      <p>Введите свои личные данные, чтобы использовать все функции сайта</p>
      <button className="hidden" onClick={() => dispatch(toggleForm())}>
        Вход
      </button>
    </div>
  );
};

export default TogglePanelLeft;
