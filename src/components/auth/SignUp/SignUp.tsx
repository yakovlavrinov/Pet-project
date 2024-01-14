import styles from "./sing_up.module.scss";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/redux";
import { useForm } from "react-hook-form";
import { FC } from "react";
import { User, authUser } from "../../../redux/features/authSlice";

const SignUp: FC = () => {
  const toggle = useAppSelector((state) => state.toggle.value);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
    reset,
  } = useForm<User>({ mode: "onChange" });

  const authUserFunc = (data: User) => {
    dispatch(authUser({ user: data, params: "register" }));
    console.log(data);
    reset();
  };

  return (
    <div
      className={
        toggle
          ? `${styles.form_container} ${styles.sign_up}`
          : `${styles.form_container} ${styles.active} ${styles.sign_up}`
      }
    >
      <form onSubmit={handleSubmit(authUserFunc)} noValidate>
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
