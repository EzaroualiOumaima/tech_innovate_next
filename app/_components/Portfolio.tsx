import { StaticImageData } from "next/image";
import cloud from "../../public/assets/cloud1.jpg";
import artificel from "../../public/assets/intelligence.jpeg";
import web from "../../public/assets/webdev.avif";

interface Projects {
  title: string;
  service: string;
  description: string;
  image: StaticImageData;
}

const PortfolioPage = () => {
  const projectInfo: Projects[] = [
    {
      service: "Development",
      title: "Web Design",
      description:
        "Web development is the process of building and maintaining websites and web applications using various programming languages,",
      image: web,
    },
    {
      service: "AI",
      title: "NeuralNavi",
      description:
        " AI-powered navigation system that utilizes advanced algorithms to provide optimized routes and real-time recommendations based on user preferences and traffic conditions.",
      image: artificel,
    },
    {
      service: "Cloud Computing",
      title: "CloudSync Pro",
      description:
        "Cloud computing project aimed at providing a robust platform for seamless synchronization and management of data across multiple cloud services.",
      image: cloud,
    },
  ];
  return (
    <div>
      <section className="flex flex-col items-center justify-center gap-16 mb-10 h-screen pt-44">
        <div className="flex flex-col items-center justify-center gap-5 ">
          <h1 className="text-xl bg-gradient-to-r from-blue-900 to-blue-400 bg-clip-text text-transparent w-fit">
            Our Projects
          </h1>
          <p
            className="text-4xl font-bold"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            Some of our Recent Works
          </p>
          <p
            className="text-xl text-[#717173] italic text-center"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            There are many variations of passages of Lorem Ipsum available,
            <br />
            but the majority have suffered alteration.
          </p>
        </div>

        <div className="flex items-center justify-evenly gap-8 mb-20 w-full">
          {projectInfo.map((project, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${project.image.src})`,
                objectFit: "cover",
                backgroundPosition: "center",
              }}
              className="person-info-card w-[26rem] h-[30rem] rounded-lg overflow-hidden hover:scale-105 duration-500"
            >
              <div className="show-info flex flex-col bg-[#00000078] text-white w-full h-full pl-10 pb-10 justify-end gap-3 hover:bg-gradient-to-t from-blue-600 via-transparent to-transparent overflow-hidden">
                <div className="text-xl font-bold">{project.service}</div>
                <div className="text-lg">{project.title}</div>
                <div className="description text-lg hidden">
                  {project.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
