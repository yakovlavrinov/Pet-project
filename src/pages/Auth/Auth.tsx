import SignUp from "../../components/auth/SignUp/SignUp";
import SignIn from "../../components/auth/SignIn/SignIn";
import TogglePanelLeft from "../../components/auth/TogglePanel/TogglePanelLeft";
import TogglePaneleRight from "../../components/auth/TogglePanel/TogglePanelRight";
import styles from "./auth.module.scss";

const Auth = () => {
  const flag = false;

  return (
    <div
      className={
        flag ? styles.container : `${styles.container} ${styles.active}`
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
