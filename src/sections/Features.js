const Features = () => {
  return (
    <div className="w-full py-10">
      <div className="relative flex flex-col w-3/4 mx-auto space-y-5">
        <div className="flex flex-col items-center">
          <h6 className="font-bold text-center text-blue-600 uppercase">
            Features
          </h6>
          <h2 className="text-4xl font-bold text-center">
            <span className="block">It used to be expensive to analyze 5%+ of all audio recordings</span>
          </h2>
          <p className="text-center text-gray-600">
            Till now. Speech Projects provides a fast and accurate way to turn your recordings into valuable business knowledge.
          </p>
        </div>
        <div className="flex flex-col py-10 space-x-0 space-y-10 md:space-y-0 md:space-x-5 md:flex-row">
          <div className="flex flex-col items-center justify-start px-5 space-y-3 md:w-1/3">
            <div className="flex items-center justify-center w-16 h-16 bg-gray-600 rounded-full" />
            <h3 className="text-lg font-bold">Excellent accuracy</h3>
            <p className="text-center text-gray-400">
              96%+ accuracy, even in noisy environments, with a single API call.
            </p>
          </div>
          <div className="flex flex-col items-center justify-start px-5 space-y-3 md:w-1/3">
            <div className="flex items-center justify-center w-16 h-16 bg-gray-600 rounded-full" />
            <h3 className="text-lg font-bold">Reduce time-to-market</h3>
            <p className="text-center text-gray-400">
              By embedding our advanced AI transcription into your applications directly, your users can derive full value from your product right away.</p>
          </div>
          <div className="flex flex-col items-center justify-start px-5 space-y-3 md:w-1/3">
            <div className="flex items-center justify-center w-16 h-16 bg-gray-600 rounded-full" />
            <h3 className="text-lg font-bold">Easy to scale</h3>
            <p className="text-center text-gray-400">
              Scale hassle free and when you need to, with our pay-as-you go and enterprise pricing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
