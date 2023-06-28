import React from 'react'
import Image from '../functions/Image'

const Footer = () => {
  return (
    <footer className="py-16 bg-veryDarkBlue">
     
      <div
        className="container flex flex-col items-center justify-between mx-auto space-y-16 px-6 md:flex-row md:space-y-0"
      >
       
        <div
          className="flex flex-col items-center justify-between space-y-8 text-lg font-light md:flex-row md:space-y-0 md:space-x-14 text-grayishBlue"
        >
          <Image name="logoFooter" type="logoFooter" />
          <img src="images/logo-bookmark-footer.svg" alt="" className="mb-1" />

          <a href="#features" className="uppercase hover:text-softRed">Features</a>
          <a href="#download" className="uppercase hover:text-softRed">Download</a>
          <a href="#faq" className="uppercase hover:text-softRed">FAQ</a>
        </div>

        <div className="flex space-x-10">
          <a href="/">
            <Image name="facebook" type="" />
            <img src="images/icon-facebook.svg" alt="" className="h-6 ficon" />
          </a>
          <a href="/">
            <Image name="twitter" type="" />
            <img src="images/icon-twitter.svg" alt="" className="h-6 ficon" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer