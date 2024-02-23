import Image from "next/image";
import { StaticImageData } from "next/image";
import person1 from "../../public/assets/person1.jpg";
import person6 from "../../public/assets/person6.webp";
import person7 from "../../public/assets/pesron7.jpg";

import person8 from "../../public/assets/person8.jpg"

interface Teams {
  name: string;
  job: string;
  image: StaticImageData;
}

const PageTeam = () => {
  const personInfo: Teams[] = [
    {
      name: "John Smith",
      job: "Web Developer",
      image: person1,
    },
    {
      name: "Sara Alaoui",
      job: "Data Analyst",
      image: person8,
    },
    {
      name: "Emi Farah",
      job: "UI/UX Designer",
      image: person6,
    },
    {
      name: "David Michel",
      job: "Cloud Developer",
      image: person7,
    },
  ];
  return (
    <div>
      <section className="flex flex-col items-center justify-center gap-16 mb-15 h-screen pt-40">
        <div className="flex flex-col text-center gap-5 ">
          <h1 className="text-xl text-blue-600 "> Our Skilled Team</h1>
          <p
            className="text-4xl font-bold "
            data-aos="fade-up"
            data-aos-delay="250"
          >
            Empowering your vision with a skilled team dedicated to excellence
          </p>
          <p
            className="text-xl text-[#717173] italic"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Our proficient team, dedicated to excellence, <br /> works
            harmoniously to transform your vision into reality, consistently
            delivering outstanding outcomes.
          </p>
        </div>

        <div className="container mx-auto py-20 px-10 grid lg:grid-cols-4 rounded-lg gap-6">
          {personInfo.map((person, index) => (
            <div key={index} className="relative overflow-hidden group">
              <Image
                src={person.image}
                alt=""
                className="w-full h-full object-cover "
              />
              <div
                className="absolute bg-opacity-75 translate-x-full bg-black rounded-lg top-0 left-0 w-full 
              h-full flex flex-col items-center justify-center group-hover:translate-x-0 duration-300"
              >
                <div className="text-center text-white  text-2xl font-bold mb-2">
                  {person.name}
                </div>
                <div className="text-center text-white font-normal mb-2">
                  {person.job}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PageTeam;
