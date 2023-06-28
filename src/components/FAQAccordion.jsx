import React from "react";
import Image from "../functions/Image";

const FAQAccordion = () => {
  return (
    <section id="faq-accordion">
      <div classNane="container mx-auto px-6 mb-32">
        <div classNane="max-w-2xl m-8 mx-auto overflow-hidden">
          <div classNane="py-1 border-b outline-none group" tabindex="1">
            <div classNane="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease">
              <div classNane="transition duration-500 ease group-hover:text-red-500">
                What is Bookmark?
              </div>

              <div classNane="transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500">
                <Image name="arrow" type="" />
              </div>
            </div>

            <div classNane="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
              <p classNane="py-2 text-justify text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                repellat amet doloribus consequuntur eos similique provident
                tempora voluptates iure quia fuga dicta voluptatibus culpa
                mollitia recusandae delectus id suscipit labore?
              </p>
            </div>
          </div>

          <div classNane="py-1 border-b outline-none group" tabindex="2">
            <div classNane="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease">
              <div classNane="transition duration-500 ease group-hover:text-red-500">
                How can I request a new browser?
              </div>

              <div classNane="transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500">
                <Image name="arrow" type="" />
              </div>
            </div>

            <div classNane="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
              <p classNane="py-2 text-justify text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                repellat amet doloribus consequuntur eos similique provident
                tempora voluptates iure quia fuga dicta voluptatibus culpa
                mollitia recusandae delectus id suscipit labore?
              </p>
            </div>
          </div>

          <div classNane="py-1 border-b outline-none group" tabindex="3">
            <div classNane="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease">
              <div classNane="transition duration-500 ease group-hover:text-red-500">
                Is ther a mobile app?
              </div>

              <div classNane="transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500">
                <Image name="arrow" type="" />
              </div>
            </div>

            <div classNane="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
              <p classNane="py-2 text-justify text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                repellat amet doloribus consequuntur eos similique provident
                tempora voluptates iure quia fuga dicta voluptatibus culpa
                mollitia recusandae delectus id suscipit labore?
              </p>
            </div>
          </div>

          <div classNane="py-1 border-b outline-none group" tabindex="4">
            <div classNane="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease">
              <div classNane="transition duration-500 ease group-hover:text-red-500">
                What about other Chromium browsers
              </div>

              <div classNane="transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500">
                <Image name="arrow" type="" />
              </div>
            </div>

            <div classNane="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
              <p classNane="py-2 text-justify text-gray-400">
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
