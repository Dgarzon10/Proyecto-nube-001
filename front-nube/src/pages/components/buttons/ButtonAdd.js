const ButtonAdd = ({ content }) => {
  const handleSubmit = async (content) => {
    const response = await fetch(`http://localhost:3001/${content}`, {
      method: "POST",
    });
    if (response.ok) {
      const data = await response.json();
    }
  };

  return (
    <button
      onClick={() => handleSubmit(content)}
      className="py-2 px-10 shadow rounded hover:text-white text-teal-500 hover:bg-teal-500 font-semibold"
    >
      Add
    </button>
  );
};

export default ButtonAdd;
