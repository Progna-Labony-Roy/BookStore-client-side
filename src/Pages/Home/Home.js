import React from "react";
import useTitle from "../../Hooks/useTitle";
import Banner from "./Banner";
import Advertisements from "./Category/Advertisements";
import Categories from "./Category/Categories";
import Slider from "./Slider";

const Home = () => {
  useTitle('BookStore')
  return (
    <div>
     
        <Banner></Banner>
      {/* <Slider></Slider> */}

      <Categories></Categories>

      {/* Frequently asked question */}
      <div className="max-w-screen-lg mx-auto py-12">
        <h2 className="my-10 font-semibold font-sans text-xl text-center italic text-green-500">Questions asked by the user</h2>
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            Can I return product after delivery?
          </div>
          <div className="collapse-content">
            <p>No ,we don't have retun policy</p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            Is there a cash on delivery option?
          </div>
          <div className="collapse-content">
            <p>No, You have to pay online while ordering the book</p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            How long does it take to deliver?
          </div>
          <div className="collapse-content">
            <p>Maximun 10 days</p>
          </div>
        </div>
      </div>
      {/* <Advertisements></Advertisements>      */}
    </div>
  );
};

export default Home;
