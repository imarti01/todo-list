export const InputElement = ({
  label,
  type,
  name,
  value,
  onChange,
  classNameLabel,
  classNameInput,
}) => {
  return (
    <label className="w-10/12 flex flex-col">
      {label}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        className="border-solid border border-icon"
      />
    </label>
  );
};
