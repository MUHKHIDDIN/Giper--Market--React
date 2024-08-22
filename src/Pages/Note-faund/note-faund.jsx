import React from "react";

export const NoteFaund = () => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center h-screen px-4">
      <h1 className="text-4xl sm:text-5xl md:text-6xl text-red-500 font-extrabold tracking-wider mb-8 animate-bounce text-center">
        Page Not Found !!
      </h1>
      <img
        className="w-full max-w-md"
        src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
        alt="not found"
      />
    </div>
  );
};
