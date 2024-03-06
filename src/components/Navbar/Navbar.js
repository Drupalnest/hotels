import { Link } from "gatsby";
import React from "react";

const Navbar = () => {
  return (
    <div className=" py-2 container-fluid   flex justify-around border-b border-b-slate-400 ">
      <div className=" flex flex-row gap-2">
        <Link className="px-1 py-2 hover:bg-slate-200 rounded-2xl ">
          Hotels
        </Link>
        <Link className="px-1 py-2 hover:bg-slate-200 rounded-2xl " >Cars</Link>
        <Link className="px-1 py-2 hover:bg-slate-200 rounded-2xl ">Flights</Link>
        <Link className="px-1 py-2 hover:bg-slate-200 rounded-2xl ">Bundle + Save</Link>
        <Link className="px-1 py-2 hover:bg-slate-200 rounded-2xl ">Cruices</Link>
        <Link className="px-1 py-2 hover:bg-slate-200 rounded-2xl ">Cruices</Link>
        <Link className="px-1 py-2 hover:bg-slate-200 rounded-2xl ">Experiences</Link>
      </div>

      <div className=" flex flex-row gap-2">
        <Link className="p-2 border-1 hover:bg-slate-300 border rounded-2xl hover:cursor-pointer">
          Help
        </Link>
        <Link className="p-2 border-1 hover:bg-slate-300 border rounded-2xl hover:cursor-pointer">Find My Trip</Link>
        <Link className="p-2 border-1 hover:bg-slate-300 border rounded-2xl hover:cursor-pointer">Sign In</Link>
      </div>
    </div>
  );
};

export default Navbar;
