// import React, { useState } from "react";

// function Currency() {
//   const [isPopupOpen, setPopupOpen] = useState(false);
//   const [amount, setAmount] = useState("");
//   const [fromCurrency, setFromCurrency] = useState("USD");
//   const [toCurrency, setToCurrency] = useState("EUR");
//   const [result, setResult] = useState("");

//   const openCurrencyPopup = () => {
//     setPopupOpen(true);
//   };

//   const closeCurrencyPopup = () => {
//     setPopupOpen(false);
//   };

//   return (
//     <div className="App">
//       <button onClick={openCurrencyPopup}>Currency Name</button>

//       {isPopupOpen && (
//         <div className="popup border-2 border-red-500">
//           <div className="popup-content">
//             <span className="close" onClick={closeCurrencyPopup}>
//               &times;
//             </span>
//             <h2>Select Your Currency</h2>
//             <div className="flex flex-row">
//               <ul className="p-2">
//                 <li>Doller</li>
//                 <li>Doller</li>
//                 <li>Doller</li>
//                 <li>Doller</li>
//                 <li>Doller</li>
//                 <li>Doller</li>
//                 <li>Doller</li>
//               </ul>

//               <ul className="p-2">
//                 <li>Doller</li>
//                 <li>Doller</li>
//                 <li>Doller</li>
//                 <li>Doller</li>
//                 <li>Doller</li>
//                 <li>Doller</li>
//                 <li>Doller</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Currency;

// import React, { useState } from "react";
// import Button from "@mui/material/Button";
// import Dialog from "@mui/material/Dialog";
// import DialogTitle from "@mui/material/DialogTitle";
// import DialogContent from "@mui/material/DialogContent";
// import DialogActions from "@mui/material/DialogActions";
// import IconButton from "@mui/material/IconButton";
// import CloseIcon from "@mui/icons-material/Close";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemText from "@mui/material/ListItemText";
// import Link from "@mui/material/Link";

// function App() {
//   const [isPopupOpen, setPopupOpen] = useState(false);
//   const [selectedCurrency, setSelectedCurrency] = useState({
//     name: "Indian Rupees",
//     symbol: "₹",
//   }); // Set default currency

//   const openCurrencyPopup = () => {
//     setPopupOpen(true);
//   };

//   const closeCurrencyPopup = () => {
//     setPopupOpen(false);
//   };

//   const handleCurrencySelect = (currency) => {
//     setSelectedCurrency(currency);
//     closeCurrencyPopup();
//   };

//   const currencies = [
//     { name: "Dollar", symbol: "$" },
//     { name: "Euro", symbol: "€" },
//     { name: "Pound", symbol: "£" },
//     { name: "Yen", symbol: "¥" },
//     { name: "Canadian Dollar", symbol: "CA$" },
//     { name: "Australian Dollar", symbol: "AU$" },
//     { name: "Swiss Franc", symbol: "CHF" },
//     { name: "Chinese Yuan", symbol: "¥" },
//     // Add more currencies as needed
//   ];

//   return (
//     <div className="App ">
//       <Link
//         className="p-2 border-1 hover:bg-slate-300 border rounded-2xl hover:cursor-pointer"
//         onClick={openCurrencyPopup}
//       >
//         {selectedCurrency.symbol} {selectedCurrency.name}
//       </Link>

//       <Dialog open={isPopupOpen} onClose={closeCurrencyPopup}>
//         <DialogTitle
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//           Select Your Currency
//           <IconButton
//             edge="end"
//             color="inherit"
//             onClick={closeCurrencyPopup}
//             aria-label="close"
//           >
//             <CloseIcon />
//           </IconButton>
//         </DialogTitle>
//         <DialogContent>
//           <div className="flex flex-row">
//             <List className="p-2">
//               {currencies.map((currency, index) => (
//                 <ListItem
//                   key={index}
//                   button
//                   onClick={() => handleCurrencySelect(currency)}
//                 >
//                   <ListItemText
//                     primary={
//                       <span>
//                         <span className="text-blue-500">{currency.symbol}</span>{" "}
//                         {currency.name}
//                       </span>
//                     }
//                   />
//                 </ListItem>
//               ))}
//             </List>

//             <List className="p-2">
//               {currencies.map((currency, index) => (
//                 <ListItem
//                   key={index}
//                   button
//                   onClick={() => handleCurrencySelect(currency)}
//                 >
//                   <ListItemText
//                     primary={`${currency.symbol} ${currency.name}`}
//                   />
//                 </ListItem>
//               ))}
//             </List>
//           </div>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import Button from "@mui/material/Button";
// import Dialog from "@mui/material/Dialog";
// import DialogTitle from "@mui/material/DialogTitle";
// import DialogContent from "@mui/material/DialogContent";
// import IconButton from "@mui/material/IconButton";
// import CloseIcon from "@mui/icons-material/Close";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemText from "@mui/material/ListItemText";
// import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
// import CheckIcon from "@mui/icons-material/Check";
// import Link from "@mui/material/Link";

// function App() {
//   const [isPopupOpen, setPopupOpen] = useState(false);
//   const [selectedCurrency, setSelectedCurrency] = useState({
//     name: "Indian Rupees",
//     symbol: "₹",
//   });

//   const openCurrencyPopup = () => {
//     setPopupOpen(true);
//   };

//   const closeCurrencyPopup = () => {
//     setPopupOpen(false);
//   };

//   const handleCurrencySelect = (currency) => {
//     setSelectedCurrency(currency);
//     closeCurrencyPopup();
//   };

//   const currenciesList1 = [
//     { name: "Indian Rupees", symbol: "₹" },

//     { name: "New Zealand Dollar", symbol: "NZ$" },
//     { name: "South African Rand", symbol: "R" },
//     { name: "Russian Ruble", symbol: "₽" },
//     { name: "Hong Kong Dollar", symbol: "HK$" },
//     { name: "Turkish Lira", symbol: "₺" },
//     { name: "South Korean Won", symbol: "₩" },
//     { name: "United States Dollar", symbol: "$" },
//     { name: "Euro", symbol: "€" },
//     { name: "British Pound Sterling", symbol: "£" },
//   ];

//   const currenciesList2 = [
//     { name: "Japanese Yen", symbol: "¥" },
//     { name: "Canadian Dollar", symbol: "CA$" },
//     { name: "Australian Dollar", symbol: "AU$" },
//     { name: "Swiss Franc", symbol: "CHF" },
//     { name: "Chinese Yuan", symbol: "¥" },
//     { name: "Singapore Dollar", symbol: "SGD" },
//     { name: "Brazilian Real", symbol: "R$" },
//     { name: "Mexican Peso", symbol: "MXN$" },
//     { name: "Swedish Krona", symbol: "SEK" },
//     { name: "Norwegian Krone", symbol: "NOK" },
//   ];

//   return (
//     <div className="App">
//       <Link
//         className="p-2 hover:bg-slate-300  rounded-2xl hover:cursor-pointer"
//         onClick={openCurrencyPopup}
//       >
//         {selectedCurrency.symbol}
//         {/* {selectedCurrency.name} */}
//       </Link>

//       <Dialog open={isPopupOpen} onClose={closeCurrencyPopup}>
//         <DialogTitle
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//           Select Your Currency
//           <IconButton
//             edge="end"
//             color="inherit"
//             onClick={closeCurrencyPopup}
//             aria-label="close"
//           >
//             <CloseIcon />
//           </IconButton>
//         </DialogTitle>
//         <DialogContent>
//           <div className="flex flex-row">
//             <List className="p-2">
//               {currenciesList1.map((currency, index) => (
//                 <ListItem
//                   key={index}
//                   button
//                   onClick={() => handleCurrencySelect(currency)}
//                 >
//                   <ListItemText
//                     className=""
//                     primary={
//                       <span className="">
//                         {selectedCurrency.name === currency.name && (
//                           <span>
//                             <CheckIcon className=" text-lg font-bold text-blue-500" />
//                           </span>
//                         )}
//                         <span className="text-blue-500 ">
//                           {currency.symbol}
//                         </span>{" "}
//                         {currency.name}
//                       </span>
//                     }
//                   />
//                 </ListItem>
//               ))}
//             </List>

//             <List className="p-2">
//               {currenciesList2.map((currency, index) => (
//                 <ListItem
//                   key={index}
//                   button
//                   onClick={() => handleCurrencySelect(currency)}
//                 >
//                   <ListItemText
//                     primary={
//                       <span className="">
//                         {selectedCurrency.name === currency.name && (
//                           <span>
//                             <CheckIcon className="mr-2 text-lg font-bold text-blue-500" />
//                           </span>
//                         )}
//                         <span className="text-blue-500 ">
//                           {currency.symbol}
//                         </span>{" "}
//                         {currency.name}
//                       </span>
//                     }
//                   />
//                 </ListItem>
//               ))}
//             </List>
//           </div>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import Button from "@mui/material/Button";
// import Dialog from "@mui/material/Dialog";
// import DialogTitle from "@mui/material/DialogTitle";
// import DialogContent from "@mui/material/DialogContent";
// import IconButton from "@mui/material/IconButton";
// import CloseIcon from "@mui/icons-material/Close";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemText from "@mui/material/ListItemText";
// import CheckIcon from "@mui/icons-material/Check";
// import Link from "@mui/material/Link";
// import { setCurrencyData } from "../../redux/actions";

// function App() {
//   const [isPopupOpen, setPopupOpen] = useState(false);
//   const [selectedCurrency, setSelectedCurrency] = useState({
//     name: "Indian Rupees",
//     symbol: "₹",
//   });

//   const openCurrencyPopup = () => {
//     setPopupOpen(true);
//   };

//   const closeCurrencyPopup = () => {
//     setPopupOpen(false);
//   };

//   const handleCurrencySelect = (currency) => {
//     setSelectedCurrency(currency);
//     closeCurrencyPopup();
//   };

//   const currenciesList1 = [
//     { name: "Indian Rupees", symbol: "₹" },

//     { name: "New Zealand Dollar", symbol: "NZ$" },
//     { name: "South African Rand", symbol: "R" },
//     { name: "Russian Ruble", symbol: "₽" },
//     { name: "Hong Kong Dollar", symbol: "HK$" },
//     { name: "Turkish Lira", symbol: "₺" },
//     { name: "South Korean Won", symbol: "₩" },
//     { name: "United States Dollar", symbol: "$" },
//     { name: "Euro", symbol: "€" },
//     { name: "British Pound Sterling", symbol: "£" },
//   ];

//   const currenciesList2 = [
//     { name: "Japanese Yen", symbol: "¥" },
//     { name: "Canadian Dollar", symbol: "CA$" },
//     { name: "Australian Dollar", symbol: "AU$" },
//     { name: "Swiss Franc", symbol: "CHF" },
//     { name: "Chinese Yuan", symbol: "¥" },
//     { name: "Singapore Dollar", symbol: "SGD" },
//     { name: "Brazilian Real", symbol: "R$" },
//     { name: "Mexican Peso", symbol: "MXN$" },
//     { name: "Swedish Krona", symbol: "SEK" },
//     { name: "Norwegian Krone", symbol: "NOK" },
//   ];

//   return (
//     <div className="App">
//       <Link
//         className="p-2 hover:bg-slate-300  rounded-2xl hover:cursor-pointer"
//         onClick={openCurrencyPopup}
//       >
//         {selectedCurrency.symbol}
//         {/* {selectedCurrency.name} */}
//       </Link>

//       <Dialog open={isPopupOpen} onClose={closeCurrencyPopup}>
//         <DialogTitle
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//           Select Your Currency
//           <IconButton
//             edge="end"
//             color="inherit"
//             onClick={closeCurrencyPopup}
//             aria-label="close"
//           >
//             <CloseIcon />
//           </IconButton>
//         </DialogTitle>
//         <DialogContent>
//           <div className="flex flex-row">
//             <List className="p-2">
//               {currenciesList1.map((currency, index) => (
//                 <ListItem
//                   key={index}
//                   button
//                   onClick={() => handleCurrencySelect(currency)}
//                 >
//                   <ListItemText
//                     className=""
//                     primary={
//                       <span className="">
//                         {selectedCurrency.name === currency.name && (
//                           <span>
//                             <CheckIcon className=" text-lg font-bold text-blue-500" />
//                           </span>
//                         )}
//                         <span className="text-blue-500 ">
//                           {currency.symbol}
//                         </span>{" "}
//                         {currency.name}
//                       </span>
//                     }
//                   />
//                 </ListItem>
//               ))}
//             </List>

//             <List className="p-2">
//               {currenciesList2.map((currency, index) => (
//                 <ListItem
//                   key={index}
//                   button
//                   onClick={() => handleCurrencySelect(currency)}
//                 >
//                   <ListItemText
//                     primary={
//                       <span className="">
//                         {selectedCurrency.name === currency.name && (
//                           <span>
//                             <CheckIcon className="mr-2 text-lg font-bold text-blue-500" />
//                           </span>
//                         )}
//                         <span className="text-blue-500 ">
//                           {currency.symbol}
//                         </span>{" "}
//                         {currency.name}
//                       </span>
//                     }
//                   />
//                 </ListItem>
//               ))}
//             </List>
//           </div>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }

// export default App;

// import React, { useEffect, useState } from "react";
// import { connect } from "react-redux";
// import Button from "@mui/material/Button";
// import Dialog from "@mui/material/Dialog";
// import DialogTitle from "@mui/material/DialogTitle";
// import DialogContent from "@mui/material/DialogContent";
// import IconButton from "@mui/material/IconButton";
// import CloseIcon from "@mui/icons-material/Close";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemText from "@mui/material/ListItemText";
// import CheckIcon from "@mui/icons-material/Check";
// import Link from "@mui/material/Link";
// import {
//   setCurrencyData,
//   setExchangeRates,
//   SET_CURRENCY,
// } from "../../redux/actions";

// function App({ selectedCurrency, setCurrencyData }) {
//   const [isPopupOpen, setPopupOpen] = useState(false);

//   useEffect(() => {
//     // Fetch exchange rates when the app loads
//     setExchangeRates();
//   }, [setExchangeRates]);

//   const openCurrencyPopup = () => {
//     setPopupOpen(true);
//   };

//   const closeCurrencyPopup = () => {
//     setPopupOpen(false);
//   };

//   const handleCurrencySelect = (currency) => {
//     setCurrencyData(currency);
//     closeCurrencyPopup();
//   };

//   const currenciesList1 = [
//     { name: "Indian Rupees", symbol: "₹" },

//     { name: "New Zealand Dollar", symbol: "NZ$" },
//     { name: "South African Rand", symbol: "R" },
//     { name: "Russian Ruble", symbol: "₽" },
//     { name: "Hong Kong Dollar", symbol: "HK$" },
//     { name: "Turkish Lira", symbol: "₺" },
//     { name: "South Korean Won", symbol: "₩" },
//     { name: "United States Dollar", symbol: "$" },
//     { name: "Euro", symbol: "€" },
//     { name: "British Pound Sterling", symbol: "£" },
//   ];

//   const currenciesList2 = [
//     { name: "Japanese Yen", symbol: "¥" },
//     { name: "Canadian Dollar", symbol: "CA$" },
//     { name: "Australian Dollar", symbol: "AU$" },
//     { name: "Swiss Franc", symbol: "CHF" },
//     { name: "Chinese Yuan", symbol: "¥" },
//     { name: "Singapore Dollar", symbol: "SGD" },
//     { name: "Brazilian Real", symbol: "R$" },
//     { name: "Mexican Peso", symbol: "MXN$" },
//     { name: "Swedish Krona", symbol: "SEK" },
//     { name: "Norwegian Krone", symbol: "NOK" },
//   ];

//   return (
//     <div className="App">
//       <Link
//         className="p-2 hover:bg-slate-300  rounded-2xl hover:cursor-pointer"
//         onClick={openCurrencyPopup}
//       >
//         {selectedCurrency.symbol}
//       </Link>

//       <Dialog open={isPopupOpen} onClose={closeCurrencyPopup}>
//         <DialogTitle
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//           Select Your Currency
//           <IconButton
//             edge="end"
//             color="inherit"
//             onClick={closeCurrencyPopup}
//             aria-label="close"
//           >
//             <CloseIcon />
//           </IconButton>
//         </DialogTitle>
//         <DialogContent>
//           <div className="flex flex-row">
//             <List className="p-2">
//               {currenciesList1.map((currency, index) => (
//                 <ListItem
//                   key={index}
//                   button
//                   onClick={() => handleCurrencySelect(currency)}
//                 >
//                   <ListItemText
//                     className=""
//                     primary={
//                       <span className="">
//                         {selectedCurrency.name === currency.name && (
//                           <span>
//                             <CheckIcon className=" text-lg font-bold text-blue-500" />
//                           </span>
//                         )}
//                         <span className="text-blue-500 ">
//                           {currency.symbol}
//                         </span>{" "}
//                         {currency.name}
//                       </span>
//                     }
//                   />
//                 </ListItem>
//               ))}
//             </List>

//             <List className="p-2">
//               {currenciesList2.map((currency, index) => (
//                 <ListItem
//                   key={index}
//                   button
//                   onClick={() => handleCurrencySelect(currency)}
//                 >
//                   <ListItemText
//                     primary={
//                       <span className="">
//                         {selectedCurrency.name === currency.name && (
//                           <span>
//                             <CheckIcon className="mr-2 text-lg font-bold text-blue-500" />
//                           </span>
//                         )}
//                         <span className="text-blue-500 ">
//                           {currency.symbol}
//                         </span>{" "}
//                         {currency.name}
//                       </span>
//                     }
//                   />
//                 </ListItem>
//               ))}
//             </List>
//           </div>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }

// const mapStateToProps = (state) => ({
//   selectedCurrency: state.currencyData,
// });

// const mapDispatchToProps = {
//   setCurrencyData,
//   setExchangeRates,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
//import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import CheckIcon from "@mui/icons-material/Check";
import Link from "@mui/material/Link";
import { setCurrencyData, setExchangeRates } from "../../redux/actions";

function App() {
  const selectedCurrency = useSelector((state) => state.currency.currencyData);
  console.log('selectedCurrency',selectedCurrency)
  const dispatch = useDispatch();
  const [isPopupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    // Fetch exchange rates when the app loads
    dispatch(setExchangeRates());
  }, [dispatch]);

  const openCurrencyPopup = () => {
    setPopupOpen(true);
  };

  const closeCurrencyPopup = () => {
    setPopupOpen(false);
  };

  const handleCurrencySelect = (currency) => {
    dispatch(setCurrencyData(currency));
    closeCurrencyPopup();
  };

  const currenciesList1 = [
    { name: "Indian Rupees", symbol: "₹" },
    { name: "New Zealand Dollar", symbol: "NZ$" },
    { name: "South African Rand", symbol: "R" },
    { name: "Russian Ruble", symbol: "₽" },
    { name: "Hong Kong Dollar", symbol: "HK$" },
    { name: "Turkish Lira", symbol: "₺" },
    { name: "South Korean Won", symbol: "₩" },
    { name: "United States Dollar", symbol: "$" },
    { name: "Euro", symbol: "€" },
    { name: "British Pound Sterling", symbol: "£" },
  ];

  const currenciesList2 = [
    { name: "Japanese Yen", symbol: "¥" },
    { name: "Canadian Dollar", symbol: "CA$" },
    { name: "Australian Dollar", symbol: "AU$" },
    { name: "Swiss Franc", symbol: "CHF" },
    { name: "Chinese Yuan", symbol: "¥" },
    { name: "Singapore Dollar", symbol: "SGD" },
    { name: "Brazilian Real", symbol: "R$" },
    { name: "Mexican Peso", symbol: "MXN$" },
    { name: "Swedish Krona", symbol: "SEK" },
    { name: "Norwegian Krone", symbol: "NOK" },
  ];

  return (
    <div className="App">
      <Link
        className="p-2 hover:bg-slate-300  rounded-2xl hover:cursor-pointer"
        onClick={openCurrencyPopup}
      >
        {selectedCurrency.symbol}
      </Link>

      <Dialog open={isPopupOpen} onClose={closeCurrencyPopup}>
        <DialogTitle
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          Select Your Currency
          <IconButton
            edge="end"
            color="inherit"
            onClick={closeCurrencyPopup}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <div className="flex flex-row">
            <List className="p-2">
              {currenciesList1.map((currency, index) => (
                <ListItem
                  key={index}
                  button
                  onClick={() => handleCurrencySelect(currency)}
                >
                  <ListItemText
                    className=""
                    primary={
                      <span className="">
                        {selectedCurrency.name === currency.name && (
                          <span>
                            <CheckIcon className=" text-lg font-bold text-blue-500" />
                          </span>
                        )}
                        <span className="text-blue-500 ">
                          {currency.symbol}
                        </span>{" "}
                        {currency.name}
                      </span>
                    }
                  />
                </ListItem>
              ))}
            </List>

            <List className="p-2">
              {currenciesList2.map((currency, index) => (
                <ListItem
                  key={index}
                  button
                  onClick={() => handleCurrencySelect(currency)}
                >
                  <ListItemText
                    primary={
                      <span className="">
                        {selectedCurrency.name === currency.name && (
                          <span>
                            <CheckIcon className="mr-2 text-lg font-bold text-blue-500" />
                          </span>
                        )}
                        <span className="text-blue-500">{currency.symbol}</span>{" "}
                        {currency.name}
                      </span>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default App;
