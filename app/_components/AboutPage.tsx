"use client";
import CountUp from "react-countup";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { GoClock } from "react-icons/go";
import { PiMedalLight } from "react-icons/pi";
import { IconType } from "react-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

interface CountUpCardProps {
  label: string;
  start: number;
  end: number;
  Icon: IconType;
  color: string;
  data: string;
  delay: string;
}

const CountUpCard = ({
  label,
  start,
  end,
  Icon,
  color,
  data,
  delay,
}: CountUpCardProps) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);
  return (
    <div
      data-aos={data}
      data-aos-delay={delay}
      className="bg-white p-6 rounded-lg shadow flex flex-col items-center justify-center gap-8"
    >
      <Icon className={`react-icon h-14 w-14 ${color}`} />
      <CountUp
        className="text-4xl font-bold  "
        start={start}
        end={end}
        duration={4}
        separator=","
        suffix="+"
      />
      <h2 className="text-2xl text-gray-500 mb-2">{label}</h2>
    </div>
  );
};

const pageAbout = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 ">
      <h1 className="text-xl bg-gradient-to-r from-blue-900 to-blue-400 bg-clip-text text-transparent w-fit">
        Experts growts
      </h1>
      <p className="text-4xl font-bold" data-aos="fade-up" data-aos-delay="250">
        Our Company Growth
      </p>
      <p
        className="text-xl text-[#737271] italic"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        We have grown strength over the past 20 years.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 p-20 shadow">
        <CountUpCard
          label="Years of Experience"
          start={0}
          end={10}
          Icon={PiMedalLight}
          color="text-[rgb(201,162,85)]"
          data="fade-up"
          delay="750"
        />
        <CountUpCard
          label="Projects Completed"
          start={0}
          end={100}
          Icon={IoMdCheckmarkCircleOutline}
          color="text-green-700"
          data="fade-up"
          delay="1000"
        />
        <CountUpCard
          label="Staticfied Customers"
          start={0}
          end={1000}
          Icon={IoIosHeartEmpty}
          color="text-red-700"
          data="fade-up"
          delay="1250"
        />
        <CountUpCard
          label="Days Of Operation"
          start={0}
          end={1000}
          Icon={GoClock}
          color="text-blue-700"
          data="fade-up"
          delay="1500"
        />
      </div>
    </div>
  );
};

export default pageAbout;
