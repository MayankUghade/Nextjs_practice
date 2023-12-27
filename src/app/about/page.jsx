import Image from "next/image";
import about_us from "./about_us.svg";
import Link from "next/link";
const About = () => {
  return (
    <div className="grid md:grid-cols-2">
      <div className="flex justify-center items-center">
        <Image className="w-full lg:w-[500]" src={about_us} alt="About us" />
      </div>

      <div className="p-10 flex flex-col">
        <div className="lg:w-[50%] lg:mt-[50px] lg:mr-[120px] p-1">
          <h1 className="text-3xl lg:text-4xl font-bold">
            Who are <span className="text-yellow-400">we</span> ?
          </h1>
          <p className="mt-5 font-xl font-semibold lg:mr-3">
            At <span className="text-yellow-400">Enhancer</span>, we are a team
            of dedicated professionals passionate about crafting cutting-edge
            web applications.
            <br /> With a shared commitment to innovation and excellence, we
            transform ideas into digital solutions that make an impact.
          </p>
        </div>

        <div className="lg:w-[50%] lg:ml-[50%] lg:mt-[-120px] mt-[30px]">
          <h1 className="text-3xl lg:text-4xl font-bold">
            What we <span className="text-yellow-400">Do</span> ?
          </h1>
          <p className="mt-5 font-xl font-semibold">
            At <span className="text-yellow-400">Enhancer</span>, we specialize
            in providing top-notch web application development services. Here's
            what sets us apart:
            <br />.{" "}
            <span className="text-yellow-400">Innovative Solutions</span>:
            Crafting unique web applications.
            <br />. <span className="text-yellow-400">Tailored Devlopment</span>
            : Ensuring every web application is meticulously crafted.
            <br />.{" "}
            <span className="text-yellow-400">Excellence in execution</span>:
            Delivering excellence in every phase of development.
          </p>
          <Link href="/portfolio">
            <button className="p-3 bg-yellow-400 rounded-lg mt-3 text-black font-semibold">
              Our work
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
