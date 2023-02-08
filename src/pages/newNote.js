import { useState } from "react";
import React from "react";
import { HiOutlinePlus } from "react-icons/hi";
import "./override.css";
import { TiTick } from "react-icons/ti";
import { TiTimes } from "react-icons/ti";

const NewNote = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addedRef = React.createRef();
  const notAddedRef = React.createRef();

  const resetStatus = () => {
    setTimeout(() => {
      addedRef.current.style.display = "none";
      notAddedRef.current.style.display = "none";
    }, 2000);
  };

  const setStatus = (refToChange) => {
    refToChange.current.style.display = "block";
    resetStatus();
  };

  const handleSubmitNote = async (e) => {
    e.preventDefault();
    setTitle(e.target[0].value);
    setBody(e.target[1].value);
    const note = { title, body, tags: [] };

    fetch("/api/newNote", {
      method: "POST",
      body: JSON.stringify(note),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        console.log(response);
        if (response.ok) {
          setTitle("");
          setBody("");
          setStatus(addedRef);
        } else {
          setStatus(notAddedRef);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <div ref={addedRef} className="added">
        <TiTick className="tick" />
        <div>Note added</div>
      </div>
      <div ref={notAddedRef} className="notadded">
        <TiTimes className="tick" />
        <div>An error occurred</div>
      </div>
      <form
        className="newNote"
        onSubmit={(e) => {
          handleSubmitNote(e);
        }}
      >
        <input
          type="text"
          required="true"
          placeholder="note title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <textarea
          placeholder="Content"
          onChange={(e) => {
            setBody(e.target.value);
          }}
          value={body}
        />
        <button>
          <HiOutlinePlus className="icon" />
          Add Note
        </button>
      </form>
    </>
  );
};

export default NewNote;
