import Image from "next/image";
const Newsletter = () => {
  return (
    <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-md">
      <div className="flex flex-row space-x-10">
        {" "}
        <Image
          src={"/mailbox.svg"}
          alt="Mailbox"
          width={350}
          height={350}
          className="mt-auto"
        />
        <div className="flex-col space-y-4">
          <h3 className="text-5xl">Subscribe to our newsletter!</h3>
          <div className="text-sm font-light text-gray-400">
            We&apos;ll send you the best of our blog just once a month. We
            promise.
          </div>
          <div>
            <input
              type="text"
              id="first_name"
              className="block w-full p-3 text-sm text-gray-600 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 "
              placeholder="Enter e-mail"
            />
          </div>{" "}
          <button className="p-3 text-white rounded-3xl bg-primary-500">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
