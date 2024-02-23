"use client";

import { useEffect } from "react";
import tech from "../public/assets/home.jpg";
import AboutPage from "./_components/AboutPage";
import ServicePage from "./_components/ServicePage";
import TeamPage from "./_components/TeamPage";
import PortfolioPage from "./_components/Portfolio";

import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);
  return (
    <>
      <div
        className="flex items-center pl-20 w-full h-screen bg-cover mb-32"
        style={{ backgroundImage: `url(${tech.src})` }}
      >
        <div className="flex flex-col gap-7">
          <h1
            className="bg-gradient-to-r from-blue-600 via-white to-white bg-clip-text text-transparent text-left text-5xl italic mb-14 font-bold"
            data-aos="fade-right"
          >
            Welcome to Tech Innovate
          </h1>
          <p
            className="text-xl leading-10 text-white w-[40%]"
            data-aos="fade-right"
            data-aos-delay="250"
          >
            Experience technological excellence with Tech Innovate. We are a
            passionate team dedicated to transforming ideas into innovative
            digital solutions. Explore our services, meet our team, and let us
            help shape the digital future of your business.
          </p>
        </div>
      </div>

      <AboutPage />
      <ServicePage />
      <PortfolioPage />
      <TeamPage />
    </>
  );
}

export default Home;
