"use client";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Support from "../../public/assets/support.webp";
import ContactCards from "../_components/ContactCard";

const ContactPage = () => {
  return (
    <div>
      <div data-aos="fade-in">
        <div className="w-full h-[30rem] bg-gradient-to-r from-blue-500 via-transparent to-blue-300 flex items-center justify-center mb-32">
          <h1 className="text-6xl font-bold text-blue-600">CONTACT US</h1>
        </div>
        <section className="flex items-center justify-center flex-col gap-10 mb-10">
          <div className="flex flex-col gap-6 text-center mb-11">
            <h1 className="text-xl text-blue-600">Contact Us Today</h1>
            <h2 className="text-3xl">Build beautiful websites today!</h2>
            <h3 className="text-xl italic text-[#717173]">
              Ready to bring your vision to life? <br />
              Contact us today to begin creating a beautiful website that stands
              out and drives results
            </h3>
          </div>
          <div className="flex flex-wrap gap-8 items-center justify-center mb-20">
            <ContactCards
              Icon={FaPhone}
              title="Call us today"
              descriptions="PS : +212 0658475814"
              secondDescription="HR : +212 0524847581"
            />

            <ContactCards
              Icon={MdEmail}
              title="Send Us Mail"
              descriptions="HR: admin@gmail.com"
              secondDescription="AD : support@tryngo.com"
            />

            <ContactCards
              Icon={CiLocationOn}
              title="Location"
              descriptions="123 Main Street, Maarif Casablanca"
              secondDescription="458 Street, Hay Hassani"
            />
          </div>

          <form
            action=""
            className="flex items-center justify-center gap-10 mb-32"
          >
            <div>
              <Image src={Support} alt="support" />
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-5xl font-bold">Contact Us</h1>
              <h2 className="text-lg mb-5">
                I am available for freelance work. Connect with me via phone:{" "}
                <br /> <span className="font-bold">01912-123456</span> or email:{" "}
                <span className="font-bold">admin@example.com</span>
              </h2>
              <input
                type="text"
                className="contact-input"
                placeholder="Your Name *"
              />
              <input
                type="text"
                className="contact-input"
                placeholder="Your Email *"
              />
              <input
                type="text"
                className="contact-input"
                placeholder="Write A Subject *"
              />
              <input
                type="text"
                className="contact-input mb-6"
                placeholder="Message *"
              />
              <button className="hover:border-[2px]  hover:text-blue-600 text-white font-medium rounded w-56 h-14 bg-blue-600 hover:bg-transparent duration-500 text-lg font-[Poppins]">
                SEND MESSAGE
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
