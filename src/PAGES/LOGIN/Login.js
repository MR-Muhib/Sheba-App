import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      {" "}
      <form id="login_form"
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto w-full h-96 flex content-center items-center md:w-2/4 p-5"
      >
        <div className="w-full ">
          <h1 className="m-5 uppercase text-center underline font-bold text-sky-500">
            Log In
          </h1>

          <div>
            <input
              type="text"
              name="email"
              placeholder="Emter your email .."
              autoComplete="email"
              className="w-full border mt-2 p-1 border-sky-600 text-sm focus:outline-none rounded-sm"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-700">Email is required</span>
            )}
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Emter your password .."
              autoComplete="password"
              className="w-full border mt-2 p-1 border-sky-600 text-sm focus:outline-none rounded-sm"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-red-700">Password required</span>
            )}
          </div>
          <p className="my-2 text-sky-950">
            Don't have an account?{" "}
            <Link to="/signup" className="underline italic">
              Register as user
            </Link>{" "}
          </p>
          <input
            id="login_btn"
            type="submit"
            className="w-full bg-cyan-100  shadow shadow-md mt-5 cursor-pointer "
          />
        </div>
      </form>
    </>
  );
};

export default Login;
