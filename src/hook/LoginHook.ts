import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from 'yup'

interface formValues {
    email: string;
    password: string;
  }
export const LoginHook = () => {
    const navegate = useNavigate()
    const schema = Yup.object().shape({
        email: Yup.string()
          .email("The email does not exit")
          .required("The email is required"),
        password: Yup.string()
          .min(2, "Minimum two characters")
          .max(10, "Maximim ten characters")
          .required('Thle password is required')
  
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
        navegate('/dashboard')
        console.log(data);
      };
    
  return {
    register,
    handleSubmit,
    submit,
    errors
  }
}
