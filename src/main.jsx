import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { FirebaseContext } from "./context/FirebaseContext";

import { app, db } from "./firebase/config";

import { BrowserRouter } from "react-router-dom";
import UsersContext from "./context/UsersContext.jsx";


createRoot(document.getElementById("root")).render(

  <FirebaseContext.Provider value={{ app, db }}>
     <UsersContext>
     <BrowserRouter>
        <App />
      </BrowserRouter>
     </UsersContext>
    </FirebaseContext.Provider>

);
