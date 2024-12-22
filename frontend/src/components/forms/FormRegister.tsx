import { useForm } from "react-hook-form";
import { fetchAuthRegister } from "@/services/auth";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    if (data.password !== data.confirmPassword) {
      return alert("Passwords do not match");
    }

    const res = await fetchAuthRegister(data.username,data.email, data.password)
    console.log(res)
    if (res) {
      
    }
  });

  return (
    <div className="flex w-full h-full justify-center items-center">
      <form 
      onSubmit={onSubmit} 
      className="flex flex-col justify-center items-center w-full gap-[20px]"
      >
        <p className="font-[400] text-[14px] leading-[20px] text-center text-[#FFFFFF]">Register and enjoy</p>

        <input
          type="text"
          {...register("username", {
            required: {
              value: true,
              message: "Username is required",
            },
          })}
          className="w-1/2 h-[46px] text-[#333] bg-[#F6F6F6] rounded-t-lg border-b-2 border-[#717171] p-3"
          placeholder="Username"
        />

        {errors.username && (
          <span className="text-red-500 text-xs">
            {typeof errors.username.message === "string"
              ? errors.username.message
              : "An error occurred"}
          </span>
        )}

        <input
          type="email"
          {...register("email", {
            required: {
              value: true,
              message: "Email is required",
            },
          })}
          className="w-1/2 h-[46px] text-[#333] bg-[#F6F6F6] rounded-t-lg border-b-2 border-[#717171] p-3"
          placeholder="Email"
        />
        {errors.email && (
          <span className="text-red-500 text-xs">
            {typeof errors.email.message === "string"
              ? errors.email.message
              : "An error occurred"}
          </span>
        )}

        <input
          type="password"
          {...register("password", {
            required: {
              value: true,
              message: "Password is required",
            },
          })}
          className="w-1/2 h-[46px] text-[#333] bg-[#F6F6F6] rounded-t-lg border-b-2 border-[#717171] p-3"
          placeholder="Password"
        />
        {errors.password && (
          <span className="text-red-500 text-sm">
            {typeof errors.password.message === "string"
              ? errors.password.message
              : "An error occurred"}
          </span>
        )}

        <input
          type="password"
          {...register("confirmPassword", {
            required: {
              value: true,
              message: "Confirm Password is required",
            },
          })}
          className="w-1/2 h-[46px] text-[#333] bg-[#F6F6F6] rounded-t-lg border-b-2 border-[#717171] p-3"
          placeholder="Confirm Password"
        />
        {errors.confirmPassword && (
          <span className="text-red-500 text-sm">
            {typeof errors.confirmPassword.message === "string"
              ? errors.confirmPassword.message
              : "An error occurred"}
          </span>
        )}

        <div className="flex justify-center w-1/2 items-center text-center">
          <button type="submit" className="w-full h-[46px] bg-[#F0B90B] text-center rounded-lg">
            Register
          </button>
        </div>
        <p>For any questions, reach out to support@filmcut.com</p>
      </form>
    </div>
  );
}