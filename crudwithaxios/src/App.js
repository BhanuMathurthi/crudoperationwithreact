import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Contacts from "./components/contacts";
import EditUser from "./components/edit";
import AddUser from "./components/add";
import User from "./components/viewuser";

function App() {
  return (
    <div className="main">
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Contacts />}></Route>
          <Route path="/add" element={<AddUser />}></Route>
          <Route path="/edit/:id" element={<EditUser />}></Route>
          <Route path="/viewuser/:id" element={<User />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
