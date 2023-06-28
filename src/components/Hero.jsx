import React from 'react';
import Image from '../functions/Image';

const Hero = () => {
  return (
    <section id="hero">
      <div
      class="container flex flex-col-reverse mx-auto p-6 lg:flex-row lg:mb-0"
    >
          <div class="flex flex-col space-y-10 lg:mt-16 lg:w-1/2">
        <h1
          class="text-3xl font-semibold text-center lg:text-6xl lg:text-left"
        >
          A Simple Bookmark Manager
        </h1>
        <p
          class="max-w-md mx-auto text-lg text-center text-gray-400 lg:text-2xl lg:text-left lg:mt-0 lg:mx-0"
        >
          A clean and simple interface to organize your favourite websites.
          Open a new browser tab and see your sites load instantly. Try it for
          free.
        </p>

              <div
          class="flex items-center justify-center w-full space-x-4 lg:justify-start"
        >
          <a
            href="/"
            class="p-4 text-sm font-semibold text-white bg-softBlue rounded shadow-md border-2 border-softBlue md:text-base hover:bg-white hover:text-softBlue"
            >Get It On Chrome</a
          >
          <a
            href="/"
            class="p-4 text-sm font-semibold text-black bg-gray-300 rounded shadow-md border-2 border-gray-300 md:text-base hover:bg-white hover:text-gray-600"
            >Get It On Firefox</a
          >
        </div>
      </div>

          <div class="relative mx-auto lg:mx-0 lg:mb-0 lg:w-1/2">
        <div class="bg-hero"></div>

        <Image name="hero"  type="illustrationHero"/>
      </div>
    </div>
  </section>
  )
}

export default Hero;