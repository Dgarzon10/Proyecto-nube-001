const ButtonRemove = ({ onClick, id }) => {
  return (
    <button
      onClick={() => onClick(id)}
      className="p-2 ml-2 shadow rounded text-red-700 font-medium hover:text-white hover:bg-red-700"
    >
      Remove
    </button>
  );
};

export default ButtonRemove;
