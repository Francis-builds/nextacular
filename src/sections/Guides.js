const Guides = () => {
  return (
    <div className="w-full py-10">
      <div className="relative flex flex-col px-5 mx-auto space-y-5 md:w-3/4">
        <div className="flex flex-col items-center">
          <h6 className="font-bold text-center text-blue-600 uppercase">
            Guides
          </h6>
          <h2 className="text-4xl font-bold text-center">
            <span className="block">Hit the ground running with our guides</span>
          </h2>
          <p className="text-center text-gray-600">
            From zero to transcription hero. Start analyzing your data now.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 py-10 md:grid-cols-3">
          <div className="p-5 space-y-5 transition rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2">
            <div className="w-full h-40 bg-gray-400 rounded-lg animate-pulse" />
            <a href="#!">
              <div>
                <h3 className="text-lg font-bold text-gray-400">
                  Getting Started
                </h3>
                <h2 className="text-2xl font-bold">
                  Create your User and API Key in less than 60s
                </h2>
              </div>
            </a>
          </div>
          <div className="p-5 space-y-5 transition rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2">
            <div className="w-full h-40 bg-gray-400 rounded-lg animate-pulse" />
            <a href="#!">
              <div>
                <h3 className="text-lg font-bold text-gray-400">Getting Started</h3>
                <h2 className="text-2xl font-bold">
                  Bring your tech stack: Use our API in TypeScript, JavaScript, Python and more
                </h2>
              </div>
            </a>
          </div>
          <div className="p-5 space-y-5 transition rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2">
            <div className="w-full h-40 bg-gray-400 rounded-lg animate-pulse" />
            <a href="#¡">
              <div>
                <h3 className="text-lg font-bold text-gray-400">Advanced Guides</h3>
                <h2 className="text-2xl font-bold">How Speaker Diarization works</h2>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guides;
