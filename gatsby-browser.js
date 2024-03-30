// import "./src/styles/global.css";
// import React from "react";
// import { Provider } from "react-redux";
// import store from "./src/redux/store";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { ToastContainer } from "react-toastify";
// import { LoadScript } from "@react-google-maps/api";

// export const wrapRootElement = ({ element }) => {
//   return (
//     <Provider store={store}>
//       <LoadScript googleMapsApiKey="AIzaSyCzA00pEwAVjWLJ2tIMbNJY7tZjGfZeHWQ">
//         <ToastContainer /> {element}
//       </LoadScript>
//     </Provider>
//   );
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





// import React from "react";
// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import { store, persistor } from "./src/redux/store";

// export const wrapRootElement = ({ element }) => (
//   <Provider store={store}>
//     <PersistGate loading={null} persistor={persistor}>
//       {element}
//     </PersistGate>
//   </Provider>
// );

// import React from 'react';
// import "./src/styles/global.css";
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import { store, persistor } from './src/redux/store';
// import "bootstrap/dist/css/bootstrap.min.css";

// export const wrapRootElement = ({ element }) => {
//   return (
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         {element}
//       </PersistGate>
//     </Provider>
//   );
// };

// /**
//  * Implement Gatsby's Browser APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/browser-apis/
//  */

// // You can delete this file if you're not using it
// import wrapWithProvider from "./src/wrap-with-provider";
// // import "fontsource-roboto/latin.css";
// //import LogRocket from 'logrocket';

// export const onClientEntry = () => {
//   // Initialize LogRocket.
//   //LogRocket.init('vz92w8/abvi-gatsby');
// };
// /*
// export const onRouteUpdate = ({location}) => {
// };
//  */
// export const wrapRootElement = wrapWithProvider;
