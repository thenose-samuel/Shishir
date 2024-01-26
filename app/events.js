"use client";

import { useEffect, useRef, useState } from "react";
import { getIntersection } from "mezr";

export default function Events() {
  const [scroll, setScroll] = useState(500);
  const [listItemState, setListItem] = useState(false);
  const listItems = useRef({});
  const [activeImg, setActiveImg] = useState(0);

  const ref = useRef();
  const floatingElement = useRef();

  const [listItemsState, setListItemState] = useState({
    0: false,
    1: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
    17: false,
    18: false,
    19: false,
    20: false,
    21: false,
    22: false,
    23: false,
  });

  const imgURLS = ["img0.jpg", "img1.jpg", "img2.jpg"];

  // const listItem = useRef();

  const set = (val, func) => {
    func(val);
  };
  const handleScroll = (e) => {
    for (const key in listItems.current) {
      if (
        getIntersection(floatingElement.current, [listItems.current[key]]) !==
        null
      ) {
        const state = listItemsState;
        state[key] = true;
        setActiveImg(key);
        setListItem(state);
      } else {
        const state = listItemsState;
        state[key] = false;
        setListItem(state);
      }
    }

    set(e.target.scrollTop, setScroll);
  };

  useEffect(() => {
    ref.current.addEventListener("scroll", handleScroll);

    //Clean up functions
    return () => {
      ref.current.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        onClick={() => {
          setScroll(scroll + 10);
        }}
        className={`h-6 bg-yellow-400 absolute`}
        style={{ width: `100px`, top: `${scroll / 10}%` }}
        ref={floatingElement}
      ></div>
      <div
        ref={ref}
        id="main-list"
        className={`text-4xl space-y-10 transition-all pt-2 overflow-scroll h-[100vh] bg-cover `}
        style={{ backgroundImage: `url("/events/${imgURLS[activeImg]}")` }}
      >
        <div
          ref={(ref) => (listItems.current[0] = ref)}
          className=""
          style={{ color: listItemState[0] ? "yellow" : "gray" }}
        >
          {scroll}
        </div>
        <div
          ref={(ref) => (listItems.current[1] = ref)}
          className="transition-colors"
          style={{ color: listItemState[1] ? "yellow" : "gray" }}
        >
          ITEM
        </div>
        <div
          ref={(ref) => (listItems.current[2] = ref)}
          className=""
          style={{ color: listItemState[2] ? "yellow" : "gray" }}
        >
          ITEM
        </div>
        <div className="">ITEM</div>
        <div className="">ITEM</div>
        <div className="">ITEM</div>
        <div className="">ITEM</div>
        <div className="">ITEM</div>
        <div className="">ITEM</div>
        <div className="">ITEM</div>
        <div className="">ITEM</div>
        <div className="">ITEM</div>
        <div className="">ITEM</div>
        <div className="">ITEM</div>
        <div
          className=""
          style={{ fontSize: listItemState[0] ? "100px" : "20px" }}
        >
          {scroll}
        </div>
        <div className="">ITEM</div>
        <div className="">ITEM</div>
        <div className="">ITEM</div>
        <div className="">ITEM</div>
      </div>
    </>
  );
}
