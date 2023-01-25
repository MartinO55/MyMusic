import { useState } from "react";
import Nav from "./Nav";
import Homepage from "./Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./Users";
import NotFound from "./NotFound";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Users" element={<Users />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
