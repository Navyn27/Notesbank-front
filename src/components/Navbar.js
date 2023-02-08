import { Link } from "react-router-dom";
import { AiOutlineForm } from "react-icons/ai";
import "../index.css";

const Navbar = () => {
  return (
    <>
      <Link to="/" className="logoParent">
        <div className="logoParent">
          <h1 className="iconLogo">
            <AiOutlineForm className="" />
          </h1>
          <h1 className="logo">notesbank</h1>
        </div>
      </Link>
    </>
  );
};

export default Navbar;
