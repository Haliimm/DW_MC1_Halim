import './App.css';
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import UserDetails from "./components/Profil";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-details/:id" element={<UserDetails />} />
      </Routes>
    </>
  );
}

export default App;