import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppContextProvider from "./context/AppContext";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { NextUIProvider } from "@nextui-org/react";
import { AddBlogProvider } from "./context/AddBlogContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <AddBlogProvider>
          <NextUIProvider>
            <AppContextProvider>
              <App />
            </AppContextProvider>
          </NextUIProvider>
        </AddBlogProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
