import Image from "next/image";
import contact_us from "./contact_us.svg";

const Contact = () => {
  return (
    <>
      <h1 className="text-bold flex text-center justify-center text-4xl md:text-5xl lg:text-5xl font-bold mt-3">
        Lets keep in touch
      </h1>
      <div className="grid md:grid-cols-2">
        <div className="flex items-center justify-center">
          <Image className="w-full" src={contact_us} alt="contact us image" />
        </div>

        <div className="flex flex-col mt-[50px] gap-3 p-5 mb-[10px]">
          <input
            className="p-3 lg:mr-[100px] rounded-lg border-2 bg-transparent dark:border-white border-black"
            type="Text"
            placeholder="Name"
          />
          <input
            className="p-3 lg:mr-[100px] rounded-lg border-2 bg-transparent dark:border-white border-black"
            type="Text"
            placeholder="Email"
          />
          <textarea
            className="p-3 lg:mr-[100px] rounded-lg border-2 bg-transparent dark:border-white border-black"
            cols="30"
            rows="10"
            placeholder="Message"
          />
          <button className="p-2 font-semibold bg-yellow-400 text-md rounded-lg text-black w-20 mr-auto">
            send
          </button>
        </div>
      </div>
    </>
  );
};

export default Contact;
