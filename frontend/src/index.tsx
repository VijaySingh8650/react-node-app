import React from "react";
import {createRoot} from "react-dom/client";
import App from "./app";


let rootElement = document.getElementById("root");

if(rootElement){
    createRoot(rootElement).render(
      <App/>
    )
}