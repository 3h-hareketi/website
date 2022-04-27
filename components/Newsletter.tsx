const Newsletter = () => {
  return (
    <div className="w-full max-w-2xl px-8 pt-8 bg-white rounded-lg shadow-md h-72">
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
        <button className="w-1/3 p-3 text-white rounded-3xl bg-primary-500">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
