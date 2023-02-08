import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import NewNote from "./pages/newNote.js";
import Notes from "./pages/Notes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/newNote" element={<NewNote />} />
          <Route path="/*">404!</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
