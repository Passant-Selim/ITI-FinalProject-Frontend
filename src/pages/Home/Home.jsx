import React, { useState } from "react";
// import { Outlet, Link } from "react-router-dom";
import Slider from "../../components/slider/Slider";
import Header from "../../components/header/Header";

import "./Home.css";
import VideoSlider from "../../components/videoSlider/VideoSlider";

function Home() {
  const slides = [
    {
      id: 1,
      // src: "src/assets/images/toa-heftiba-FV3GConVSss-unsplash.jpg",
      src: "src/assets/images/Untitled-1.png",
    },
    {
      id: 2,
      // src: "src/assets/images/curology-6CJg-fOTYs4-unsplash.jpg",
      src: "src/assets/images/Untitled-1.png",
    },
    {
      id: 3,
      // src:"src/assets/images/sidekix-media-LPk9luwemT0-unsplash.jpg",
      src: "src/assets/images/Untitled-1.png",
    },
  ];

  return (
    <>
      <Header />
      <VideoSlider/>
      {/* imageSlider start */}
      {/* <Slider autoSlide={true} imgSlides={slides}></Slider> */}

      {/* <video autoPlay loop>
        <source
          src="src/assets/videos/pexels-taryn-elliott-3770017-1920x1080-25fps.mp4"
          type="video/mp4"
        />
      </video> */}
     
 
      {/* imageSlider end */}

      {/* RoomCategory section start */}
      <section className="flex flex-col items-center  ">
        <h1 className="text-5xl	font-medium mt-12 mb-10 leading-10	">
          Shop by Room
        </h1>
        <div className="flex flex-row gap-x-7 mb-16 ">
          <div className="room-card living">
            <a to="/" className="text-center">
              <div>
                <div className="">
                  <img
                    className="h-52 object-cover"
                    src="//images.ctfassets.net/n33pk8ulkyi3/7xX6oxvlzrv7OybE8rBXo8/d0b4371a818f1fb670a66e140d6f4026/livingsketch.jpg"
                  />
                </div>
              </div>
              <strong>
                <p className="my-4 text-lg	">Living Room</p>
              </strong>
            </a>
          </div>
          <div className="room-card  bedroom">
            <a to="/" className="text-center">
              <div>
                <div>
                  <img
                    className="h-52 object-cover"
                    src="//images.ctfassets.net/n33pk8ulkyi3/3203Qw23mDxpIYpqIBS95V/23e17074c629e8ecd3cad303a6f1152f/bedroomsketch.jpg"
                  />
                </div>
              </div>
              <strong>
                <p className="my-4 text-lg	">Bedroom</p>
              </strong>
            </a>
          </div>
          <div className="room-card  office">
            <a to="/" className="text-center">
              <div>
                <div className="">
                  <img
                    className="h-52"
                    src="//images.ctfassets.net/n33pk8ulkyi3/cbYQljbtXW7uJudehfsyT/b566e49dc43231b55e44b4424a2645f8/office.jpg"
                  />
                </div>
              </div>
              <strong>
                <p className="my-4 text-lg	">Home Office</p>
              </strong>
            </a>
          </div>
          <div className="room-card  dining">
            <a to="/" className="text-center">
              <div>
                <div className="">
                  <img
                    className="h-52 object-cover"
                    src="//images.ctfassets.net/n33pk8ulkyi3/3kbUnRi1ibVBNyOXLp0Lcn/c2f1579544f07e2fdee1ed9bded9dab4/diningsketch.jpg"
                  />
                </div>
              </div>
              <strong>
                <p className="my-4 text-lg	">Dining Room</p>
              </strong>
            </a>
          </div>
        </div>
      </section>
      {/* RoomCategory section end */}

      <section className="flex justify-center items-center text-center	pt-28 px-6 bg-white	 pb-24	">
        <div style={{ maxWidth: "976px" }}>
          <h2 className="p-4 text-4xl	leading-10 font-medium	text-black	">
            <span>“Keeping Furniture in Homes and out of Landfills."</span>
          </h2>
          <h6
            className="	text-center font-normal	 leading-8 text-black	"
            style={{ fontSize: " 25px" }}
          >
            This isn’t just another rental company - We’re elevating the future
            of furniture by replacing the commitment of ownership with a culture
            of sharing in a way that’s curated, convenient, and sustainable.
          </h6>
        </div>
      </section>

      <section className="bg-white ">
        <div className="flex justify-center items-center py-8">
          <div
            className="w-6/12 p-6 flex justify-center "
            style={{ paddingLeft: "72px" }}
          >
            <div className="flex flex-col max-w-md	justify-center items-start ">
              <h2 className="text-4xl	font-medium	leading-10	">
                Enjoy a fully furnished space in less than week
              </h2>
              <div className="mt-5 mb-9	text-lg	text-black		">
                <p>
                  Feather furniture is available to be delivered and assembled
                  in New York City, Los Angeles and San Francisco.
                </p>
              </div>
              <a to="/" className="Btn" href="">
                Explore Furniture
              </a>
            </div>
          </div>
          <div className="w-6/12">
            <img src="https://img.livefeather.com/pages-new/Homepage/section-1-flexibility.jpg?auto=compress,format&cs=srgb&dpr=1&fit=max&h=800&q=80&w=1200" />
          </div>
        </div>
      </section>
      <section className="bg-white ">
        <div className="flex flex-row-reverse	justify-center items-center py-8">
          <div className="w-6/12 p-6 flex justify-center ">
            <div className="flex flex-col max-w-md	justify-center items-start ">
              <h2 className="text-4xl	font-medium	leading-10	">
                Garage Sale - 35% & Up
              </h2>
              <div className="mt-5 mb-9	text-lg	text-black		">
                <p>
                  Our Garage Sale is open! Savings start at 35% on favorite
                  retired pieces. Find dressers, sofas, decor, and more to make
                  the year one to remember.
                </p>
              </div>
              <a to="/" className="Btn" href="">
                Shop Now
              </a>
            </div>
          </div>
          <div className="w-6/12 flex justify-center ">
            <img
              style={{ maxWidth: "63%" }}
              className="object-contain	"
              src="https://img.livefeather.com/pages/homepage/garagesale-campaign-20230531.png?auto=compress,format&cs=srgb&dpr=1&fit=max&h=1200&q=80&w=1200"
            />
          </div>
        </div>
      </section>
      <section className="bg-white ">
        <div className="flex justify-center items-center py-8">
          <div
            className="w-6/12 p-6 flex justify-center "
            style={{ paddingLeft: "72px" }}
          >
            <div className="flex flex-col max-w-md	justify-center items-start ">
              <h2 className="text-4xl	font-medium	leading-10	">
                Furniture for business, made simple.
              </h2>
              <div className="mt-5 mb-9	text-lg	text-black		">
                <p>
                  Say goodbye to cost, complexity, and commitment of furniture.
                  Feather makes it easy with affordable rental plans, white
                  glove delivery and best-in-class account service.
                </p>
              </div>
              <a to="/" className="Btn" href="">
                Visit Feather For Business
              </a>
            </div>
          </div>
          <div className="w-6/12">
            <img src="https://img.livefeather.com/pages-new/Homepage/FeatherforBusiness.jpg?auto=compress,format&cs=srgb&dpr=1&fit=max&h=800&q=80&w=1200" />
          </div>
        </div>
      </section>
      <section className="bg-white pb-48 ">
        <div className="flex flex-row-reverse	justify-center items-center py-8">
          <div className="w-6/12 p-6 flex justify-center ">
            <div className="flex flex-col max-w-md	justify-center items-start ">
              <h2 className="text-4xl	font-medium	leading-10	">
                Never assemble furniture again.
              </h2>
              <div className="mt-5 mb-9	text-lg	text-black		">
                <p>
                  We move a lot. There are countless floor plans and roommates
                  (oh, and your evolving tastes) between here and there. With
                  Feather, furnish your space without breaking a sweat or
                  reaching for a screwdriver.
                </p>
              </div>
              <a to="/" className="Btn" href="">
                How Feather Works
              </a>
            </div>
          </div>
          <div className="w-6/12 flex justify-center ">
            <img
              style={{ maxWidth: "63%" }}
              className="object-contain	"
              src="https://img.livefeather.com/pages-new/Homepage/section-2.jpg?auto=compress,format&cs=srgb&dpr=1&fit=max&h=1200&q=80&w=1200"
            />
          </div>
        </div>
      </section>

      {/* Shop our Bestsellers  */}
      <section className="flex flex-col items-center   ">
        <h1 className="text-5xl	font-medium mt-12 mb-10 leading-10	">
          Shop our Bestsellers
        </h1>
        <div className="flex flex-row  mb-16 overflow-hidden">
          <div className="product-card living bg-white">
            <a to="/" className="text-center">
              <div>
                <div className="mb-5">
                  <img
                    className="h-52 object-cover"
                    src="https://img.livefeather.com/products/cooper-dining-table/images/coo-dtb-01_silo_1_1x1.tif?auto=compress,format&cs=srgb&dpr=1&fit=max&h=211&q=80&w=211"
                  />
                </div>
              </div>
              <div>
                <span className="my-4 text-lg text-black product-name 	">
                  Cooper Dining Table
                </span>
              </div>
              <div>
                <p className="mb-4 mt-2 text-lg text-black	">
                  buy for{" "}
                  <span
                    className="text-xl font-bold"
                    style={{ color: " rgb(233, 103, 43)" }}
                  >
                    {" "}
                    $15
                  </span>
                </p>
              </div>
            </a>
          </div>
          <div className="product-card living bg-white">
            <a to="/" className="text-center">
              <div>
                <div className="mb-5">
                  <img
                    className="h-52 object-cover"
                    src="https://img.livefeather.com/products/croft-media-console/images/cro-med-05_silo_1_1x1.tif?auto=compress,format&cs=srgb&dpr=1&fit=max&h=211&q=80&w=211"
                  />
                </div>
              </div>
              <div>
                <span className=" text-lg text-black product-name	">
                  Croft Media Console
                </span>
              </div>
              <div>
                <p className="mb-4 mt-2 text-lg text-black	">
                  buy for{" "}
                  <span
                    className="text-xl font-bold"
                    style={{ color: " rgb(233, 103, 43)" }}
                  >
                    {" "}
                    $35
                  </span>
                </p>
              </div>
            </a>
          </div>
          <div className="product-card living bg-white">
            <a to="/" className="text-center">
              <div>
                <div className="mb-5">
                  <img
                    className="h-52 object-cover"
                    src="https://img.livefeather.com/products/essex-dining-chair/images/ess-dch-07_silo_1_1x1.tif?auto=compress,format&cs=srgb&dpr=1&fit=max&h=211&q=80&w=211"
                  />
                </div>
              </div>
              <div>
                <span className="my-4 text-lg text-black	product-name">
                  Essex Dining Chair
                </span>
              </div>
              <div>
                <p className="mb-4 mt-2 text-lg text-black	">
                  buy for{" "}
                  <span
                    className="text-xl font-bold"
                    style={{ color: " rgb(233, 103, 43)" }}
                  >
                    {" "}
                    $18
                  </span>
                </p>
              </div>
            </a>
          </div>
          <div className="product-card living bg-white">
            <a to="/" className="text-center">
              <div>
                <div className="mb-5">
                  <img
                    className="h-52 object-cover"
                    src="https://img.livefeather.com/products/ludlow-sofa/images/lud-sof-03_silo_1_1x1.tif?auto=compress,format&cs=srgb&dpr=1&fit=max&h=211&q=80&w=211"
                  />
                </div>
              </div>
              <div>
                <span className=" text-lg text-black product-name	">
                  Ludlow Sofa
                </span>
              </div>
              <div>
                <p className="mb-4 mt-2 text-lg text-black	">
                  buy for{" "}
                  <span
                    className="text-xl font-bold"
                    style={{ color: " rgb(233, 103, 43)" }}
                  >
                    {" "}
                    $52
                  </span>
                </p>
              </div>
            </a>
          </div>
        </div>
        <a to="/" className="All-Btn mb-16" href="">
          Shop All Furniture
        </a>
      </section>
      {/* RoomCategory section end */}
    </>
  );
}

export default Home;
