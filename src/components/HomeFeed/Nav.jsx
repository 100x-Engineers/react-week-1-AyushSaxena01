import React from "react";

export default function Nav() {
  return (
    <>
      <nav className="flex justify-center ">
        <div className="flex box-border self-stretch h-14.5 pt-5  pb-0 px-20 justify-center items-center flex-shrink-0 gap-x-40 border-b border-solid border-neutral/700 w-96.5 overflow-x-visible">
          <button className="flex flex-col items-center justify-center gap-y-4 group h-full w-full">
            <span className="font-Inter text-base not-italic leading-1.2  font-medium text-neutral/50 group-focus:text-neutral/400 ">
              For&nbsp;you
            </span>
            <div className="bg-twitter-blue-default w-14 h-0.4 rounded-4xl hidden group-focus:flex" />
          </button>
          <button className="flex pb-0 justify-center items-center flex-col gap-y-4 group">
            <span className="font-Inter text-base not-italic font-medium leading-1.2 text-neutral/50 group-focus:text-neutral/400">
              Following
            </span>
            <div className="bg-twitter-blue-default w-14 h-0.4 rounded-4xl hidden group-focus:flex" />
          </button>
        </div>
      </nav>
    </>
  );
}
