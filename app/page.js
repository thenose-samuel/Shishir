"use client";

import { useState } from "react";
import "./nav.css";

import Events from "./events";

export default function Home() {
  const [close, setClose] = useState(true);

  return (
    <>
      <div close={close ? "1" : "0"} id="nav" className="">
        <div
          className="text-white mr-10 text-end"
          onClick={() => setClose(!close)}
        >
          {" "}
          Close
        </div>
        <div className="flex flex-row justify-center pl-10 pr-10">
          <div className="overflow-hidden flex flex-row  justify-center mt-10">
            <div
              close={close ? "1" : "0"}
              id="items"
              className="text-4xl space-y-10  text-white mt-10 items-center flex flex-col"
            >
              <span id="items">HOME</span>
              <span id="items">EVENTS</span>
              <span id="items">TEAMS</span>
              <span id="items">SPONSORS</span>
            </div>
          </div>
        </div>
      </div>

      <div className="ml-10 mr-10">
        <div className="flex flex-row justify-end">
          <div onClick={() => setClose(!close)} className="cursor-pointer">
            Open
          </div>
        </div>
      </div>
      <Events />
    </>
  );
}
