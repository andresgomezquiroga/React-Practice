
  type initialValues = {
    type?: "text" | "password" | "number" | "date" | "email";
    placeholder: string;
    name: string;
    label: string;
    register: any
    errors: any
    
  };

  export const InputLabel = ({
    placeholder,
    type,
    name,
    label,
    register,
    errors,
  }: initialValues) => {
    
    return (
      <div className="mb-4">
        <label htmlFor={name} className="block text-sm font-semibold mb-2">
          {label}
        </label>
        <input
          type={type ?? "text"}
          placeholder={placeholder}
          {...register(name, { required: true })}
          className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-gray-500"
        />
        <p className="text-red-500">{errors[name]?.message}</p>
      </div>
    );
  };