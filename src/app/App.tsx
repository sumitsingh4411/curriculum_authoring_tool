import React from "react";
import "./App.css";
import Home from "../pages/home/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { INITIAL_STATE } from "../shared/utils/constant";

function App() {
  return (
    <>
      <Home />
      <ToastContainer
        position="bottom-right"
        autoClose={INITIAL_STATE.toast_delay}
      />
    </>
  );
}

export default App;
