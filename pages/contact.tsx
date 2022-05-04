import BASE_URL from "../lib/baseUrl";
import { NextSeo } from "next-seo";

const Contact = () => {
  return (
    <>
      <NextSeo title="Contact Us" description="Let's get in touch" />
      <div
        style={{
          background: "#12ABBB",
          backgroundImage: `url("${BASE_URL}/contact.svg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "fit",
          backgroundPosition: "center",
        }}
        className="flex flex-col justify-between h-screen subpixel-antialiased"
      >
        <div className="relative md:w-1/3 p-3 md:p-6 bg-white md:left-[10%] rounded-xl mt-24 flex flex-col space-y-4">
          <h1 className="font-bold text-black text-md md:text-2xl">
            Let&apos;s get in touch
          </h1>
          <div className="flex flex-row space-x-1 md:space-x-4">
            <input
              type="text"
              id="name"
              className="block w-1/3 p-1 text-sm text-gray-600 border border-gray-300 rounded-lg md:p-3 focus:ring-primary-500 focus:border-primary-500 "
              placeholder="Name"
            />
            <input
              type="text"
              id="surname"
              className="block w-1/3 p-1 text-sm text-gray-600 border border-gray-300 rounded-lg md:p-3 focus:ring-primary-500 focus:border-primary-500 "
              placeholder="Surname"
            />
            <input
              type="text"
              id="e-mail"
              className="block w-1/3 p-1 text-sm text-gray-600 border border-gray-300 rounded-lg md:p-3 focus:ring-primary-500 focus:border-primary-500 "
              placeholder="E-Mail"
            />
          </div>{" "}
          <textarea
            id="message"
            className="block w-full h-full p-1 text-sm text-gray-600 border border-gray-300 rounded-lg md:p-3 focus:ring-primary-500 focus:border-primary-500 "
            placeholder="Your message..."
          />
          <button className="p-3 text-white rounded-3xl bg-primary-500">
            Send Message
          </button>
        </div>
      </div>
    </>
  );
};
export default Contact;
