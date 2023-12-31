import React from "react";
import Image from "../functions/Image";

const FAQAccordion = () => {
  return (
    <section id="faq-accordion">
      <div className="container mx-auto px-6 mb-32">
        <div className="accordion-container max-w-2xl m-8 mx-auto overflow-hidden">
          {/* tab-1 */}
          <div className=" py-1 border-b outline-none group" tabIndex="1">
            <div className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease">
              <div className="transition duration-500 ease group-hover:text-red-500">
                What is Bookmark?
              </div>
              <div className="transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500">
                <Image name="arrow" type="arrow" />
              </div>
            </div>
            <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
              <p className="py-2 text-justify text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                repellat amet doloribus consequuntur eos similique provident
                tempora voluptates iure quia fuga dicta voluptatibus culpa
                mollitia recusandae delectus id suscipit labore?
              </p>
            </div>
          </div>
          {/* tab-2 */}
          <div className="py-1 border-b outline-none group" tabIndex="2">
            <div className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease">
              <div className="transition duration-500 ease group-hover:text-red-500">
                How can I request a new browser?
              </div>
              <div className="transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500">
                <Image name="arrow" type="arrow" />
              </div>
            </div>
            <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
              <p className="py-2 text-justify text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                repellat amet doloribus consequuntur eos similique provident
                tempora voluptates iure quia fuga dicta voluptatibus culpa
                mollitia recusandae delectus id suscipit labore?
              </p>
            </div>
          </div>
          <div className="py-1 border-b outline-none group" tabIndex="3">
            <div className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease">
              <div className="transition duration-500 ease group-hover:text-red-500">
                Is ther a mobile app?
              </div>
              <div className="transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500">
                <Image name="arrow" type="arrow" />
              </div>
            </div>
            <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
              <p className="py-2 text-justify text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                repellat amet doloribus consequuntur eos similique provident
                tempora voluptates iure quia fuga dicta voluptatibus culpa
                mollitia recusandae delectus id suscipit labore?
              </p>
            </div>
          </div>
          <div className="py-1 border-b outline-none group" tabIndex="4">
            <div className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease">
              <div className="transition duration-500 ease group-hover:text-red-500">
                What about other Chromium browsers
              </div>
              <div className="transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500">
                <Image name="arrow" type="arrow" />
              </div>
            </div>
            <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
              <p className="py-2 text-justify text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                repellat amet doloribus consequuntur eos similique provident
                tempora voluptates iure quia fuga dicta voluptatibus culpa
                mollitia recusandae delectus id suscipit labore?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
