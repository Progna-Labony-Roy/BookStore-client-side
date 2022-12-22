import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        className="hero max-content"
        style={{ backgroundImage: `url("https://i.ibb.co/3YJPdK5/image3.jpg")` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md pt-36 pb-60">
            <h1 className="mb-3 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
            welcome to our website and buy your favourite books
        online.
            </p>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
