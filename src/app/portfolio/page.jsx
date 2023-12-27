import Link from "next/link";
import illustrations from "./illustration.png";
import website from "./website.jpg";
import applications from "./application.jpg";
import Image from "next/image";

const Portfolio = () => {
  return (
    <div className="mt-6">
      <h1 className="text-4xl lg:text-4xl text-semibold text-yellow-400">
        Choose a gallery
      </h1>

      <div className="grid md:grid-cols-3 gap-5 mt-7">
        <Link className="group" href="/portfolio/Illustrations">
          <div className="group relative w-[300px] h-[400px] md:w-[200]">
            <Image
              className="w-[300px] h-[400px] border-2 border-white rounded-lg group-hover:text-yellow-500"
              src={illustrations}
              alt="Illustrations"
            />
            <h1 className="text-4xl absolute bottom-0 right-0 text-white p-2 font-bold group-hover:text-yellow-500">
              Illustrations
            </h1>
          </div>
        </Link>

        <Link className="group" href="/portfolio/Website">
          <div className=" group relative w-[300px] h-[400px]">
            <Image
              className="w-[300px] h-[400px] border-2 border-white rounded-lg group-hover:text-yellow-500"
              src={website}
              alt="websitet"
            />
            <h1 className="text-4xl group-hover:text-yellow-500 absolute bottom-0 right-0 text-white p-2 font-bold ">
              website
            </h1>
          </div>
        </Link>

        <Link className="group" href="/portfolio/Applications">
          <div className="group relative w-[300px] h-[400px]">
            <Image
              className="w-[300px] h-[400px] border-2 border-white rounded-lg group-hover:text-yellow-500"
              src={applications}
              alt="application"
            />
            <h1 className="text-4xl group-hover:text-yellow-500 absolute bottom-0 right-0 text-white p-2 font-bold ">
              Applications
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
