export const InputElement = ({ label, type, name, value, onChange }) => {
  return (
    <label className="w-10/12 flex flex-col">
      {label}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        className="border-solid border border-icon px-1 py-[0.09rem] outline-text text-sm"
      />
    </label>
  );
};
