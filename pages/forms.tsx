import { FieldErrors, useForm } from "react-hook-form";

interface LoginFrom {
  username: string;
  email: string;
  password: string;
}

export default function Forms() {
  const { register, handleSubmit } = useForm<LoginFrom>(); // register input state 연결. (자동으로 state를 만들고 연결해주는듯.)

  const onValid = (data: LoginFrom) => {
    console.log("onValid");
  };

  const onInValid = (errors: FieldErrors) => {
    console.log(errors);
  };
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
      <input
        {...register("email", { required: "email is required" })}
        type="email"
        placeholder="email"
      />
      <input
        {...register("password", { required: "password is required" })}
        type="password"
        placeholder="password"
      />
      <input type="submit" value="create Account" />
    </form>
  );
}
