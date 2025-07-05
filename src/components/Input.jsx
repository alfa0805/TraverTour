function Input({ type = "text", placeholder = "Enter text", name }) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="bg-white py-2 px-3 my-2 w-9/10 mx-auto text-black"
      />
    </div>
  );
}

export default Input;
