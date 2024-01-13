import styles from "./sing_up.module.scss";
import type { RootState } from "../../../redux/store/store";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { FC } from "react";

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: FC = () => {
  const toggle = useSelector((state: RootState) => state.toggle.value);
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<SignUpFormData>({ mode: "onChange" });

  const authUser = (data: SignUpFormData) => {
    console.log(data);
  };

  return (
    <div
      className={
        toggle
          ? `${styles.form_container} ${styles.sign_up}`
          : `${styles.form_container} ${styles.active} ${styles.sign_up}`
      }
    >
      <form onSubmit={handleSubmit(authUser)} noValidate>
        <h1>Создать аккаунт</h1>
        <input
          {...register("name", {
            required: {
              message: "Имя обязательно к заполнению",
              value: true,
            },
            minLength: {
              message: "Минимум 3 символа",
              value: 3,
            },
          })}
          type="text"
          placeholder="Name"
        />
        <span>{errors?.name?.message}</span>
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
        <button>Регистрация</button>
      </form>
    </div>
  );
};

export default SignUp;
