// gatsby-ssr.js

// import React from "react";
// import { Provider } from "react-redux";
// import store from "./src/redux/store";

// export const wrapRootElement = ({ element }) => {
//   return <Provider store={store}>{element}</Provider>;
// };




import "./src/styles/global.css";
import React from "react";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import { LoadScript } from "@react-google-maps/api";
import { store, persistor } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

export const wrapRootElement = ({ element }) => {
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <LoadScript googleMapsApiKey="AIzaSyCzA00pEwAVjWLJ2tIMbNJY7tZjGfZeHWQ">
        <ToastContainer /> {element}
      </LoadScript>
      </PersistGate>
    </Provider>
  );
};
