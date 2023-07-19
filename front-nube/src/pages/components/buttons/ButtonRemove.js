const ButtonRemove = ({ onClick }) => {
  return (
    <button
      onClick={() => onClick()}
      className="p-2 ml-2 shadow rounded text-red-700 font-medium hover:text-white hover:bg-red-700"
    >
      Remove
    </button>
  );
};

export default ButtonRemove;
