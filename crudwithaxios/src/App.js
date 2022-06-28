import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import AddUser from "./AddUser";
import EditUser from "./EditUser";
import User from "./User";

function App() {
  return (
    <div className="main">
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/adduser" element={<AddUser />}></Route>
          <Route path="/user/:id" element={<User />}></Route>
          <Route path="/edituser/:id" element={<EditUser />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
