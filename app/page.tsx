import tech from "./assests/tech.jpg";
import Image from "next/image";

function Home() {
  return (
    <div className="pt-16">
      <div className="flex items-center justify-center gap-9 pt-10 ">
        <div className="w-4/12 border">
          <Image
            src={tech}
            alt="tech"
            className="w-[600px] h-[500px] rounded-xl"
          />
        </div>
        <div className="w-[37%]">
          <h1 className="text-blue-700 text-center  text-5xl italic my-6 mb-12 font-bold  ">
            Welcome to Tech Innovate
          </h1>
          <p className="text-xl font-bold leading-10 ">
            Experience technological excellence with Tech Innovate. We are a
            passionate team dedicated to transforming ideas into innovative
            digital solutions. Explore our services, meet our team, and let us
            help shape the digital future of your business.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Home;
