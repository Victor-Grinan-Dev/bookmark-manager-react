import React from "react";
import Image from "../functions/Image";

const DownLoadBoxes = () => {
  return (
    <section id="download-boxes" className="py-32">
      <div className="relative flex flex-col items-center max-w-5xl mx-auto space-y-10 px-10 md:px-6 md:space-y-0 md:space-x-7 md:flex-row">
        <div className="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:w-1/3">
          <div className="flex justify-center">
            <Image name="chrome" type=""/>
          </div>

          <h5 className="pt-6 text-xl font-bold">Add to Chrome</h5>
          <p className="text-gray-400">Minimum Version 62</p>

          <div className="bg-dots bg-repeat-x px-6 pt-6 capitalize">
            <a
              href="/"
              className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-softBlue hover:text-softBlue hover:bg-white border-softBlue"
            >
              Add & Install Extension
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/3">
          <div className="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:mt-8">
            <div className="flex justify-center">
              <Image name="firefox" type=""/>
            </div>

            <h5 className="pt-6 text-xl font-bold">Add to Firefox</h5>
            <p className="text-gray-400">Minimum Version 55</p>

            <div className="bg-dots bg-repeat-x px-6 pt-6 capitalize">
              <a
                href="/"
                className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-softBlue hover:text-softBlue hover:bg-white border-softBlue"
              >
                Add & Install Extension
              </a>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3">
          <div className="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:mt-16">
            <div className="flex justify-center">
              <Image name="opera" type=""/>
            </div>

            <h5 className="pt-6 text-xl font-bold">Add to Opera</h5>
            <p className="text-gray-400">Minimum Version 46</p>

            <div className="bg-dots bg-repeat-x px-6 pt-6 capitalize">
              <a
                href="/"
                className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-softBlue hover:text-softBlue hover:bg-white border-softBlue"
              >
                Add & Install Extension
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownLoadBoxes;
