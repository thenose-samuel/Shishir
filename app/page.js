import Image from "next/image";

import welcome from "../public/text/welcome.svg";
import shishir from "../public/text/Shishir.svg";
import mascot from "../public/Mascot.svg";
import munTag from "../public/mun-tag.svg";
import separator from "../public/home-separator-1.svg";
import "./home.css";

export default function Home() {
  return (
    <>
      <div className="h-screen overflow-scroll ">
        <div id="splash">
          <div id="splash-inner" className="text-red-700 text-center font-bold">
            Welcome to Shishir 2024!
          </div>
        </div>
        {/** Felt lazy to search and download all the fonts,
         * and then style them so... I just used svg images :P */}
        <div id="home" className="pt-5 w-fit">
          <Image
            src={munTag}
            width="0"
            height="0"
            sizes="100vw"
            className="w-[25vw] h-auto -translate-x-4"
          />
        </div>
        <div id="home" className="w-screen flex flex-row justify-center">
          <Image
            src={welcome}
            width="0"
            height="0"
            sizes="100vw"
            className="w-[95vw] h-auto "
          />
        </div>
        <div id="home" className="pt-2 flex flex-row justify-center">
          <Image
            src={shishir}
            width="0"
            height="0"
            sizes="100vw"
            className="w-[95vw] h-auto"
          />
        </div>
        <div id="home" className="pt-2 flex flex-row justify-center">
          <Image
            src={mascot}
            width="0"
            height="0"
            sizes="100vw"
            className="w-[99vw]  h-auto"
          />
        </div>
        <div id="home" className="pt-10 flex flex-row justify-center">
          <Image
            src={separator}
            width="0"
            height="0"
            sizes="100vw"
            className="w-[100vw]  h-auto"
          />
        </div>
        <div id="home" className="text-center pt-24 bg-transparent">
          <div>This is the Shishir Home Page</div>
          <div>Welcome one and all!!!</div>
        </div>
        {/* <div id="home" className="text-center pt-24">
          <div>This is the Shishir Home Page</div>
          <div>Welcome one and all!!!</div>
        </div>
        <div id="home" className="text-center pt-24">
          <div>This is the Shishir Home Page</div>
          <div>Welcome one and all!!!</div>
        </div>
        <div id="home" className="text-center pt-24">
          <div>This is the Shishir Home Page</div>
          <div>Welcome one and all!!!</div>
        </div>
        <div id="home" className="text-center pt-24">
          <div>This is the Shishir Home Page</div>
          <div>Welcome one and all!!!</div>
        </div>
        <div id="home" className="text-center pt-24">
          <div>This is the Shishir Home Page</div>
          <div>Welcome one and all!!!</div>
        </div>
        <div id="home" className="text-center pt-24">
          <div>This is the Shishir Home Page</div>
          <div>Welcome one and all!!!</div>
        </div> */}
      </div>
    </>
  );
}
