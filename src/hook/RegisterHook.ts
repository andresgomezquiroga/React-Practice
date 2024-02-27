import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

interface formValues {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export const RegisterHook = () => {
  const schema = Yup.object().shape({
    first_name: Yup.string().required("The first name is required"),
    last_name: Yup.string().required("Thle last_name is required"),
    email: Yup.string()
      .email("The email does not exit")
      .required("The email is required"),
    password: Yup.string()
      .min(2, "Minimum two characters")
      .max(10, "Maximim ten characters")
      .required("The password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Password must match")
      .required("The confirm password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formValues>({
    resolver: yupResolver(schema),
  });

  const submit = (data: formValues) => {
    toast.success("Usuario Registrado correctamente");
    console.log(data);
  };
  return {
    register,
    submit,
    handleSubmit,
    errors,
  };
};
