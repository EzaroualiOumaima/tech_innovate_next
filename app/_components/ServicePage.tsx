"use client";
import React from "react";
import Card from "../_components/Card";
import { CiMobile1 } from "react-icons/ci";
import { IoLayersOutline } from "react-icons/io5";
import { MdSecurity } from "react-icons/md";
import { RiRobot2Line } from "react-icons/ri";

function Page() {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-16 mb-10 h-screen pt-44">
        <div className="flex flex-col items-center justify-center gap-5 ">
          <h1 className="text-xl bg-gradient-to-r from-blue-900 to-blue-400 bg-clip-text text-transparent w-fit">
            What we can do for you
          </h1>
          <p
            className="text-4xl font-bold"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            Services provide for you.
          </p>
          <p
            className="text-xl text-[#717173] italic"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            We provide comprehensive solutions to nurture <br /> and grow your
            business
          </p>
        </div>

        <div
          className="grid grid-cols-2 gap-8 p-5 mb-20 rounded"
          data-aos="fade-in"
          data-aos-delay="750"
        >
          <Card
            Icon={MdSecurity}
            title="Cybersecurity and Data Protection"
            descriptions="Assess and strengthen the security of computer systems and networks to protect sensitive data from internal and external threats."
          />
          <Card
            Icon={IoLayersOutline}
            title="Website Devloppement"
            descriptions="Building dynamic websites that captivate, engage, and drive results."
          />
          <Card
            Icon={RiRobot2Line}
            title="Data analysis and artificial intelligence"
            descriptions="Develop predictive models and machine learning systems to help businesses make more informed decisions."
          />
          <Card
            Icon={CiMobile1}
            title="Mobile Devloppement"
            descriptions="Crafting mobile solutions that elevate user experiences and drive business growth."
          />
        </div>
      </section>
    </>
  );
}

export default Page;
