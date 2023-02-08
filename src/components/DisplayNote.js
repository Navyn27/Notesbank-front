import "../index.css";
import { RiDeleteBin5Line } from "react-icons/ri";

const DisplayNote = ({ note }) => {
  const deleteNote = () => {
    fetch(`http://localhost:4000/api/${note._id}`, {
      method: "DELETE",
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="note">
      <h3>
        {note.title}
        <RiDeleteBin5Line className="delicon" onClick={deleteNote} />
      </h3>
      <p>{note.body}</p>
    </div>
  );
};

export default DisplayNote;
