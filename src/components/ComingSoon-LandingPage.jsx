import React from "react";
import Header from "./Header-LandingPage";
import HeroSection from "./HeroSection";

const ComingSoon = () => {
  return (
    <div className="relative min-h-screen bg-custom-bg text-white">
      <div
        className="absolute inset-0 z-0 bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/cloud-big.svg')",
          backgroundSize: "55%",
          backgroundPosition: "right top",
        }}
      />
      <div
        className="absolute inset-0 z-10 bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/cloud-white.svg')",
          backgroundSize: "15%",
          backgroundPosition: "center top",
          top: "17%",
          left: "14%",
        }}
      />
      <div
        className="absolute inset-0 z-20 bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/cloud-small.svg')",
          backgroundSize: "23%",
          backgroundPosition: "center top",
          top: "15%",
          left: "10%",
        }}
      />
      <div className="relative z-30">
        <Header />
        <HeroSection />
      </div>
    </div>
  );
};

export default ComingSoon;
