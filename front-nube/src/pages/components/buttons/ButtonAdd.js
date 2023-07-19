const ButtonAdd = ({ handleSubmit }) => {
  return (
    <button
      onClick={() => handleSubmit()}
      className="py-2 px-10 shadow rounded hover:text-white text-teal-500 hover:bg-teal-500 font-semibold"
    >
      Add
    </button>
  );
};

export default ButtonAdd;