import { FieldErrors, useForm } from "react-hook-form";

interface LoginFrom {
  username: string;
  email: string;
  password: string;
  commonErrors?: string;
}

export default function Forms() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFrom>({
    mode: "onChange",
  }); // register input state 연결. (자동으로 state를 만들고 연결해주는듯.)

  const onValid = (data: LoginFrom) => {
    console.log("onValid");
    reset();
  };

  const onInValid = (errors: FieldErrors) => {
    // console.log(errors);
  };

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onValid, onInValid)}>
      <input
        {...register("username", {
          required: "username is required",
          minLength: {
            message: "5자리 이상 입력하세요.",
            value: 5,
          },
        })}
        type="text"
        placeholder="username"
      />
      {errors.username?.message}
      <input
        {...register("email", {
          required: "email is required",
          validate: {
            notGmail: (value) =>
              !value.includes("@gmail.com") || "gmail not allowed",
          },
        })}
        type="email"
        placeholder="email"
        className={`${
          Boolean(errors.email?.message) ? "border-red-300" : "outline-none"
        }`}
      />
      {errors.email?.message}
      <input
        {...register("password", { required: "password is required" })}
        type="password"
        placeholder="password"
      />
      {errors.password?.message}
      <input type="submit" value="create Account" />
      {errors.commonErrors?.message}
    </form>
  );
}
