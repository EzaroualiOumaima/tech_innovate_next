import React from "react";
import CardProjects from "../_components/CardProjects";
import cloud from "../../public/assets/cloud1.jpg";
import web from "../../public/assets/webdev.avif";
import artificel from "../../public/assets/intelligence.jpeg";




const PortfolioPage = () => {
  return (
    <div>
         <section className="flex flex-col items-center justify-center gap-16 mb-10 h-screen pt-44">
        <div className="flex flex-col text-center gap-5 ">
          <p
            className="text-4xl font-bold"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            Services provide for you.
          </p>
          <p
            className="text-xl text-[#717173]"
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
          <CardProjects
            image={cloud}
            service="hhjekd"
            title="Cybersecurity and Data Protection"
            descriptions="Assess and strengthen the security of computer systems and networks to protect sensitive data from internal and external threats."
          />
          <CardProjects
            image={web}
            service="hhjekd"
            title="Website Devloppement"
            descriptions="Building dynamic websites that captivate, engage, and drive results."
          />
          <CardProjects
            image={artificel}
            service="hhjekd"
            title="Data analysis and artificial intelligence"
            descriptions="Develop predictive models and machine learning systems to help businesses make more informed decisions."
          />
         
        </div>
      </section>


    </div>
  );
};
export default PortfolioPage;
