import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Setting from "./Setting";
import { Route, Routes } from "react-router-dom";
import Not_found from "./Not_found";

export default function Pages() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="*" element={<Not_found />} />
      </Routes>
    </div>
  );
}
