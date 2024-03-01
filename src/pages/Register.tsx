import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { RegisterHook } from "../hook/RegisterHook";
import { InputLabel } from "../components/InputLabel";

const Register = () => {

  const { errors, handleSubmit, submit, register } = RegisterHook(); // Obtener register del hook

  return (
    <div className="bg-gray-900 text-white min-h-screen flex justify-center items-center ">
      <div className="max-w-[50%] w-full p-8 rounded-lg shadow-lg ">
        <h2 className="text-2xl font-bold mb-4">Create an Account</h2>
        <form onSubmit={handleSubmit(submit)}>
          <div className="grid grid-cols-2 gap-6">
            <InputLabel
              label="First name" // Corregir la etiqueta
              placeholder=""
              name="first_name"
              type="text"
              register={register} // Pasar register como prop
              errors={errors} // Pasar errors como prop
            />
            <InputLabel
              label="Last name" // Corregir la etiqueta
              placeholder=""
              name="last_name"
              type="text"
              register={register} // Pasar register como prop
              errors={errors} // Pasar errors como prop
            />
              <InputLabel
              label="Email" // Corregir la etiqueta
              placeholder=""
              name="email"
              type="email"
              register={register} // Pasar register como prop
              errors={errors} // Pasar errors como prop
            />
            <InputLabel
              label="Password"
              placeholder=""
              name="password"
              type="password"
              register={register} // Pasar register como prop
              errors={errors} // Pasar errors como prop
            />
            <InputLabel
              label="Confirm Password"
              placeholder=""
              name="confirmPassword"
              type="password"
              register={register} // Pasar register como prop
              errors={errors} // Pasar errors como prop
            />
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            >
              Register
            </button>
          </div>
        </form>
        <div className="flex flex-col justify-center items-center">
          <div className="text-center">
            <p className="mb-2">
              Already have an account? <Link to="/login" className="text-blue-500">Back to Login</Link>
            </p>
            <p className="mb-2">
              <a href="#" className="text-blue-500">Forgot your password?</a>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer theme="dark" />
    </div>
  );
};

export default Register;
