import Form from "./components/Form";
import Home from "./components/Home";
import Nav from "./components/Nav";

import "./assets/sweetalert2.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <Nav />
        <div className="container mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-user" element={<Form />} />
            <Route path="/update-user/:id" element={<div>Update user</div>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
