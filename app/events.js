"use client";

import { useEffect, useRef, useState } from "react";
import { getIntersection } from "mezr";

export default function Events() {
  const [scroll, setScroll] = useState(500);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef();
  const floatingElement = useRef();
  const listItem = useRef();

  const set = (val, func) => {
    func(val);
  };
  const handleScroll = (e) => {
    console.log(getIntersection(floatingElement.current, [listItem.current]));
    set(e.target.scrollTop, setScroll);
  };

  useEffect(() => {
    ref.current.addEventListener("scroll", handleScroll);
    const target = floatingElement.current;
    const otherElement = listItem.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsIntersecting(entry.isIntersecting);
        });
      },
      {
        root: otherElement, // Set the other element as the root
        threshold: 0,
      }
    );

    observer.observe(target);

    //Clean up functions
    return () => {
      observer.disconnect();
      ref.current.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        onClick={() => {
          setScroll(scroll + 10);
        }}
        className={`h-10 bg-yellow-300 absolute`}
        style={{ width: `100px`, top: `${scroll / 10}%` }}
        ref={floatingElement}
      ></div>
      <div
        ref={ref}
        id="main-list"
        className="text-4xl space-y-10 bg-red-400 overflow-scroll h-[80vh]"
      >
        <div className="">{scroll}</div>
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
        <div className="">ITEM</div>
        <div className="">ITEM</div>
        <div
          ref={listItem}
          className=""
          style={{ fontSize: isIntersecting ? "100px" : "20px" }}
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
