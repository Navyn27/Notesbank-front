import { useEffect, useState } from "react";
import DisplayNote from "../components/DisplayNote";
import { HiOutlinePlus } from "react-icons/hi";
import { Link } from "react-router-dom";
import { TiTick } from "react-icons/ti";

const Notes = () => {
  const [data, setData] = useState(null);

  const getNotes = () => {
    fetch("http://localhost:4000/api/notes").then((response) => {
      response
        .json()
        .then((data) => {
          setData(data);
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  useEffect(() => {
    getNotes();
    console.log(data);
  }, []);

  return (
    <>
      <Link to="/newNote" className="toFormParent">
        <div className="toForm">
          <h3>
            <HiOutlinePlus className="icon" />
          </h3>
          <h3 className="quicksandText">New note</h3>
        </div>
      </Link>
      <div>
        {data &&
          data.map((note) => {
            return <DisplayNote key={note._id} note={note} />;
          })}
      </div>
      <h1 class="noData">{!data && "No data available!"}</h1>
    </>
  );
};

export default Notes;
