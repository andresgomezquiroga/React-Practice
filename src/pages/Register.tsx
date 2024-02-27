import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { RegisterHook } from "../hook/RegisterHook";

const Register = () => {

  const {errors, handleSubmit, register, submit} =  RegisterHook()


  return (
    <div className="bg-gray-900 text-white min-h-screen flex justify-center items-center ">
      <div className="max-w-[50%] w-full p-8 rounded-lg shadow-lg ">
        <h2 className="text-2xl font-bold mb-4">Create an Account</h2>
        <form onSubmit={handleSubmit(submit)}>
          <div className="grid grid-cols-2 gap-6">
            <div className="mb-4">
              <label
                htmlFor="firstName"
                className="block text-sm font-semibold mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                {...register("first_name", { required: true })}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-gray-500"
              />
              <p className="text-red-500">{errors.first_name?.message}</p>
            </div>
            <div className="mb-4">
              <label
                htmlFor="lastName"
                className="block text-sm font-semibold mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                {...register("last_name", { required: true })}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-gray-500"
              />
              <p className="text-red-500">{errors.last_name?.message}</p>
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-gray-500"
              />
              <p className="text-red-500">{errors.email?.message}</p>
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-semibold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                {...register("password", { required: true })}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-gray-500"
              />
              <p className="text-red-500">{errors.password?.message}</p>
            </div>
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-semibold mb-2"
              >
                Confirm Password
              </label>
              <input
                type="password"
                {...register("confirmPassword", { required: true })}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-gray-500"
              />
              <p className="text-red-500">{errors.confirmPassword?.message}</p>
            </div>
          </div>

          <div className="mb-6">
            <button
              type="submit"
              className="w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            >
              Register
            </button>
          </div>
          <div className="flex flex-col justify-center items-center">
          <div className="text-center">
            <p className="mb-2">Already have an account? <Link to='/login' className="text-blue-500">Back to Login</Link></p>
            <p className="mb-2"><a href="#" className="text-blue-500">Forgot your password?</a></p>
          </div>
        </div>
        </form>
      </div>
      <ToastContainer theme="dark" />
    </div>
  );
};

export default Register;
