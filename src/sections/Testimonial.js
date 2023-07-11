const Testimonial = () => {
  return (
    <div className="w-full py-10 bg-gray-200">
      <div className="relative flex flex-col px-5 mx-auto space-y-5 md:w-3/4">
        <div className="flex flex-col items-center justify-center mx-auto space-y-5 md:w-3/5">
          <h3 className="text-2xl leading-10 text-center text-gray-600">
            "Transcribing calls in Colombian Spanish used to be tedious and take weeks. With SpeechProjects.com API
            we are able to transcribe EVERY call as soon as it ends."
          </h3>
          <div className="flex flex-row items-center justify-center space-x-5">
            <h4 className="font-bold">Fran Troiano</h4>
            <span className="text-2xl font-extrabold text-blue-600">/</span>
            <h4>Head of Global Business Solutions, Mitrol.</h4>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mx-auto space-y-5 md:w-3/5">
          <h3 className="text-2xl leading-10 text-center text-gray-600">
            "Whatsapp audios are usually a mess. Transcribing them with SpeechProjects API enabled us to
            better communicate with our customers, in their channel of choice."
          </h3>
          <div className="flex flex-row items-center justify-center space-x-5">
            <h4 className="font-bold">Paulo Monteiro</h4>
            <span className="text-2xl font-extrabold text-blue-600">/</span>
            <h4>Founder, OnTecnologia.</h4>
          </div>
        </div>
      </div>
    </div>
  );

};

export default Testimonial;
