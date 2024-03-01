type Props = {
  name: string;
  label: string;
  type?: "password" | "date" | "text" | "number" | "email";
  register: any;
  errors: any;
};

export const InputLabelLogin = ({
  errors,
  label,
  name,
  register,
  type,
}: Props) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-semibold mb-2">
        {label}
      </label>
      <input
        type={type}
        {...register(name, { required: true })}
        className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-gray-500"
      />
      <p className="text-red-500">{errors[name]?.message}</p>
    </div>
  );
};
