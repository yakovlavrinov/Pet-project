import styles from "./sing_in.module.scss";
import type { RootState } from "../../../redux/store/store";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { FC } from "react";

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: FC = () => {
  const toggle = useSelector((state: RootState) => state.toggle.value);
  const {
    register,
    // handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<SignInFormData>({ mode: "onChange" });

  return (
    <div
      className={
        toggle
          ? `${styles.form_container} ${styles.sign_in}`
          : `${styles.form_container} ${styles.active} ${styles.sign_in}`
      }
    >
      <form noValidate>
        <h1>Вход</h1>
        <input
          {...register("email", {
            required: {
              message: "Email обязательно к заполнению",
              value: true,
            },
            minLength: {
              message: "Минимум 10 символов",
              value: 10,
            },
            pattern: {
              message: "Напишите правильно свой email",
              value: /^[^ ]+@[^ ]+\.[a-z]{2,5}$/,
            },
          })}
          type="email"
          placeholder="Email"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register("password", {
            required: {
              message: "Пароль обязательно к заполнению",
              value: true,
            },
            pattern: {
              message:
                "Пароль должен содержать не мение 8 символов, заглавную букву, число, символ!",
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{8,}/,
            },
          })}
          type="password"
          placeholder="Password"
        />
        <span>{errors?.password?.message}</span>
        <a href="#!">Забыли свой пароль?</a>
        <button>Вход</button>
      </form>
    </div>
  );
};

export default SignIn;
