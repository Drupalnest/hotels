import "./src/styles/global.css";
import React from "react";
import { Provider } from "react-redux";
import store from "./src/redux/store"
import "bootstrap/dist/css/bootstrap.min.css";


export const wrapRootElement = ({ element }) => {
  return <Provider store={store}>{element}</Provider>;
};





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
