import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { LoginHook } from "../hook/LoginHook";
import { InputLabelLogin } from "../components/InputLabelLogin";

const Login = () => {
  const { register, handleSubmit, errors, submit } = LoginHook();
  return (
    <div className="bg-gray-900 text-white min-h-screen flex justify-center items-center">
      <div className="max-w-md w-full p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit(submit)}>
          <InputLabelLogin
            label="Login"
            name="email"
            type="email"
            errors={errors}
            register={register}
          />
          <InputLabelLogin
            label="Password"
            name="password"
            type="password"
            errors={errors}
            register={register}
          />
          <div className="mb-6">
            <button
              type="submit"
              className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            >
              Login
            </button>
          </div>
        </form>
        <div className="text-sm">
          <p className="text-gray-400">
            Don't have an account yet?{" "}
            <Link to="/register" className="text-blue-400 hover:underline">
              Register now
            </Link>
          </p>
          <p className="text-gray-400">
            <a href="#" className="text-blue-400 hover:underline">
              Forgot your password?
            </a>
          </p>
        </div>
      </div>
      <ToastContainer theme="dark" />
    </div>
  );
};

export default Login;
