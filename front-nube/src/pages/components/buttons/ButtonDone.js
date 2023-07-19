// const ButtonDone = ({ done, onClick }) => {
//   return (
//     <button
//       onClick={() => onClick()}
//       className={`p-2 w-1/3 mr-2 font-medium hover:text-white shadow rounded
//           ${
//             done
//               ? "text-yellow-600 hover:bg-yellow-600"
//               : "text-green-600 hover:bg-green-600"
//           } `}
//     >
//       {done ? "Not Done" : "Done"}
//     </button>
//   );
// };

const ButtonDone = ({ done }) => {
  return done ? (
    <></>
  ) : (
    <button
      className={`p-2 mr-2 font-medium hover:text-white shadow rounded text-green-600 hover:bg-green-600
           `}
    >
      {done ? "Not Done" : "Done"}
    </button>
  );
};

export default ButtonDone;
