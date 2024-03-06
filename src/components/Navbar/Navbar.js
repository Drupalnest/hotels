import { Link } from "gatsby";
import React from "react";
import ApartmentIcon from "@mui/icons-material/Apartment";
import Hotel from "../../images/hotel.png";

const Navbar = () => {
  return (
    <div className=" py-2 container-fluid   flex justify-around border-b border-b-slate-400 ">
      <div className=" flex flex-row lg:gap-4 md:gap-4">
        <Link to="/" className=" ">
          <img src={Hotel} className="w-10 h-10" />
        </Link>
        <Link to="/" className="px-1 py-2 hover:bg-slate-200 rounded-2xl ">
          Hotels
        </Link>
        <Link  className="px-1 py-2 hover:bg-slate-200 rounded-2xl ">Cars</Link>
        <Link className="px-1 py-2 hover:bg-slate-200 rounded-2xl ">
          Flights
        </Link>
        <Link className="px-1 py-2 hover:bg-slate-200 rounded-2xl ">
          Bundle + Save
        </Link>
      
        <Link className="px-1 py-2 hover:bg-slate-200 rounded-2xl ">
          Cruices
        </Link>
        <Link className="px-1 py-2 hover:bg-slate-200 rounded-2xl ">
          Experiences
        </Link>
      </div>

      <div className=" flex flex-row gap-2">
        <Link className="p-2 border-1 hover:bg-slate-300 border rounded-2xl hover:cursor-pointer">
          Help
        </Link>
        <Link className="p-2 border-1 hover:bg-slate-300 border rounded-2xl hover:cursor-pointer">
          Find My Trip
        </Link>
        <Link className="p-2 border-1 hover:bg-slate-300 border rounded-2xl hover:cursor-pointer">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

// import { Link } from "gatsby";
// import React, { useState } from "react";
// import ApartmentIcon from "@mui/icons-material/Apartment";
// import Hotel from "../../images/hotel.png";

// const Navbar = () => {
//   const [isMenuOpen, setMenuOpen] = useState(false);

//   const handleMenuToggle = () => {
//     setMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className="py-2 container-fluid flex flex-col items-center sm:flex-row justify-between border-b border-b-slate-400">
//       <div className="flex items-center ">
//         <div className="">
//           <img src={Hotel} className="w-10 h-10" alt="Hotel Logo" />
//         </div>
//         <button
//           onClick={handleMenuToggle}
//           className="text-2xl ml-2 focus:outline-none sm:hidden"
//         >
//           ☰
//         </button>
//       </div>

//       <div
//         className={`${
//           isMenuOpen ? "flex" : "hidden"
//         } sm:flex sm:flex-row gap-2 mt-2 sm:mt-0`}
//       >
//         <Link
//           to="/hotels"
//           className="px-2 py-2 hover:bg-slate-200 rounded-2xl "
//         >
//           Hotels
//         </Link>
//         <Link to="/cars" className="px-2 py-2 hover:bg-slate-200 rounded-2xl ">
//           Cars
//         </Link>
//         <Link
//           to="/flights"
//           className="px-2 py-2 hover:bg-slate-200 rounded-2xl "
//         >
//           Flights
//         </Link>
//         <Link
//           to="/bundle"
//           className="px-2 py-2 hover:bg-slate-200 rounded-2xl "
//         >
//           Bundle + Save
//         </Link>
//         <Link
//           to="/cruises"
//           className="px-2 py-2 hover:bg-slate-200 rounded-2xl "
//         >
//           Cruises
//         </Link>
//         <Link
//           to="/experiences"
//           className="px-2 py-2 hover:bg-slate-200 rounded-2xl "
//         >
//           Experiences
//         </Link>
//       </div>

//       <div className="flex gap-2">
//         <Link
//           to="/help"
//           className="p-2 border-1 hover:bg-slate-300 border rounded-2xl hover:cursor-pointer"
//         >
//           Help
//         </Link>
//         <Link
//           to="/find-my-trip"
//           className="p-2 border-1 hover:bg-slate-300 border rounded-2xl hover:cursor-pointer"
//         >
//           Find My Trip
//         </Link>
//         <Link
//           to="/sign-in"
//           className="p-2 border-1 hover:bg-slate-300 border rounded-2xl hover:cursor-pointer"
//         >
//           Sign In
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
