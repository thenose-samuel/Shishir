"use client";

import { useState } from "react";

import "./nav.css";

export default function Navbar() {
  const [close, setClose] = useState(null);

  return (
    <>
      <div close={close} id="nav" className="absolute bg-[#F1EAE5]">
        <div className="ml-5 mr-5">
          <div
            close={close}
            id="items"
            className="text-5xl  space-y-3 font-medium font-bernier text-[#E03932] mt-10  flex flex-col"
          >
            <div className="flex justify-between space-x-6">
              <span id="items">Home</span>
              <div className="flex justify-end ">
                <span
                  id="items"
                  className="text-2xl font-bukhari mr-4 text-[#186B80]"
                >
                  ..............
                </span>
                <span
                  id="items"
                  className="text-2xl font-bukhari text-[#186B80]"
                >
                  1
                </span>
              </div>
            </div>

            <div className="flex justify-between space-x-6">
              <span id="items">Events</span>
              <div className="flex justify-end ">
                <span
                  id="items"
                  className="text-2xl font-bukhari mr-4 text-[#186B80]"
                >
                  ............
                </span>
                <span
                  id="items"
                  className="text-2xl font-bukhari text-[#186B80]"
                >
                  2
                </span>
              </div>
            </div>

            <div className="flex justify-between space-x-6">
              <span id="items">Sponsors</span>
              <div className="flex justify-end ">
                <span
                  id="items"
                  className="text-2xl font-bukhari mr-4 text-[#186B80]"
                >
                  .........
                </span>
                <span
                  id="items"
                  className="text-2xl font-bukhari text-[#186B80]"
                >
                  3
                </span>
              </div>
            </div>
            <div className="flex justify-between space-x-6">
              <span id="items">Teams</span>
              <div className="flex justify-end ">
                <span
                  id="items"
                  className="text-2xl font-bukhari mr-4 text-[#186B80]"
                >
                  ...........
                </span>
                <span
                  id="items"
                  className="text-2xl font-bukhari text-[#186B80]"
                >
                  4
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex absolute flex-row bg-transparent w-screen justify-end">
        <div
          onClick={() => {
            console.log("Clicked Open");
            if (close === null) {
              setClose("0");
            } else if (close === "1") {
              setClose("0");
            } else {
              setClose("1");
            }
          }}
          className="cursor-pointer font-bold transition-all duration-1000"
          style={{ color: close === "0" ? "white" : "black" }}
        >
          Open
        </div>
      </div>
    </>
  );
}
