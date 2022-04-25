import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./components/Form";
import Home from "./components/Home";

const App = () => {
  const routes = (
    <>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
  return <BrowserRouter>{routes}</BrowserRouter>;
};

export default App;
