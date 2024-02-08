"use client";

import { useState } from "react";
import Link from "next/link";

import "./nav.css";

export default function Navbar() {
  const [close, setClose] = useState(null);

  return (
    <>
      <div close={close} id="nav" className="absolute bg-black">
        <div className="flex flex-row justify-center pl-10 pr-10">
          <div className="overflow-hidden flex flex-row  justify-center mt-10">
            <div
              close={close}
              id="items"
              className="text-4xl space-y-24 font-semibold  text-white mt-10 items-center flex flex-col"
            >
              <span id="items">HOME</span>
              <Link href={"/events"}>
                <span id="items">EVENTS</span>
              </Link>
              <span id="items">TEAMS</span>
              <span id="items">SPONSORS</span>
              <span id="items">MUN</span>
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
