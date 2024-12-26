import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import UserContext from "./context/UserContext";
import { FirebaseContext } from "./context/FirebaseContext";

import { app } from "./firebase/config";

import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <UserContext>
    <FirebaseContext.Provider value={{ app }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FirebaseContext.Provider>
  </UserContext>
);
