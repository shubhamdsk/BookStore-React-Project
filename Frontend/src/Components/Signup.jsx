import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className=" w-[600px] ">
          <div className="modal-box dark:bg-gray-800 bg-white p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">SignUp</h3>
              {/* Name */}
              <div className="mt-4 space-y-2">
                <span>Name</span> <br />
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-full px-3 py-1 border rounded-md outline-none dark:bg-gray-700"
                  {...register("Name", { required: true })}
                />
                <br />
                {errors.Name && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              {/* Email */}
              <div className="mt-4 space-y-2">
                <span>Email</span> <br />
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full px-3 py-1 border rounded-md outline-none dark:bg-gray-700"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              {/* Password */}
              <div className="mt-4 space-y-2">
                <span>Password</span> <br />
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  className="w-full px-3 py-1 border rounded-md outline-none dark:bg-gray-700"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* Button */}
              <div className="flex justify-around mt-4">
                <button className="bg-pink-500 text-white rounded-md px-3 py-1  hover:bg-pink-700 duration-200">
                  SignUp
                </button>
                <p className="text-xl">
                  Have Account ?
                  <button
                    className="underline
           text-blue-600 cursor-pointer  dark:text-blue-300"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>{" "}
                  <Login />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;