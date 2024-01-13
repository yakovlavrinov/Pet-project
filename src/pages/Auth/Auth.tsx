import SignUp from "../../components/auth/SignUp/SignUp";
import SignIn from "../../components/auth/SignIn/SignIn";
import TogglePanelLeft from "../../components/auth/TogglePanel/TogglePanelLeft";
import TogglePaneleRight from "../../components/auth/TogglePanel/TogglePanelRight";
import styles from "./auth.module.scss";
import type { RootState } from "../../redux/store/store";
import { useSelector } from "react-redux";

const Auth = () => {
  const toggle = useSelector((state: RootState) => state.toggle.value);

  return (
    <div
      className={
        toggle ? styles.container : `${styles.container} ${styles.active}`
      }
      id="container"
    >
      <SignUp />
      <SignIn />
      <div className={styles.toggle_container}>
        <div className={styles.toggle}>
          <TogglePanelLeft />
          <TogglePaneleRight />
        </div>
      </div>
    </div>
  );
};

export default Auth;
