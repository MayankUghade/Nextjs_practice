import Image from "next/image";
import team_image from "../Assets/team_working.svg";
import Link from "next/link";
export default function Home() {
  return (
    <div className="grid p-5 md:grid-cols-2 items-center justify-center">
      <div className="flex flex-col jsutify-center items-center p-7 mt-[-60px]">
        <h1 className="font-bold p-8 text-4xl lg:text-4xl xl:text-5xl">
          Elevate your business's online presence with{" "}
          <span className="text-yellow-400">Enhancer</span>!
        </h1>
        <h1 className="lg:text-xl mr-auto ml-3 pl-5 pr-5 mt-3">
          Your vision, our expertise – together, we create impeccable web
          applications.
        </h1>

        <div className="mr-auto ml-8 mt-10 ">
          <Link href={"/portfolio"}>
            <button className="p-2 bg-yellow-400 text-md text-black font-semibold rounded-lg">
              Explore More
            </button>
          </Link>
        </div>
      </div>

      <div className="flex justify-end">
        <Image src={team_image} alt="Team working" className="w-full" />
      </div>
    </div>
  );
}
