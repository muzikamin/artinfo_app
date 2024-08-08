import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import _theme from "./theme/theme";
import { ChakraProvider } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={_theme}>
      <Router />
    </ChakraProvider>
  </React.StrictMode>
);
