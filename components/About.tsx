import React from "react";

export default function About() {
  return (
    <section id="about" className="second-section h-screen bg-black relative">
      <div className="h-[500px] bg-orange-500  w-full  animate-pulse rotate-[10deg] skew-x-12"></div>
      <div className="absolute top-[15%] sm:right-20 md:right-[300px] text-white">
        <h1 className="text-5xl font-bold font-rubix">
          Elevate Your Game with Nike Air Jordan
        </h1>
        <p className="w-[500px] font-semibold pt-10">
          Experience the ultimate in sneaker innovation and style with Nike Air Jordan. 
          Perfect for athletes and sneakerheads alike, these shoes offer unmatched performance 
          and iconic design. Step up your game and make a statement with every step.
        </p>
        <div className="grid md:grid-cols-2 gap-2 text-black font-rubix font-bold mt-4">
          <span className="bg-black text-white rounded-full px-3">
            #JustDoIt
          </span>
          <span className="bg-white text-black rounded-full px-3">
            #AirJordan
          </span>
        </div>
      </div>
    </section>
  );
}
