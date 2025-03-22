import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./screens/Home";
import { Inventory } from "./screens/Inventory";
import { Supply } from "./screens/Supply";
import { Distribution } from "./screens/Distribution";
import { Donations } from "./screens/Donations";
import { Login } from "./screens/Login";

function App() {
  document.title = "Seva";
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/supply" element={<Supply />} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/distribution" element={<Distribution />} />
        <Route path="/" element={<Login />} />
        {/* <Route path="/Admin" element={<Admin />} /> */}
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
