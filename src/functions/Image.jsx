import React from "react";

import dots from "../images/bg-dots.svg";
import arrow from "../images/icon-arrow.svg";
import close from "../images/icon-close.svg";
import error from "../images/icon-error.svg";
import facebook from "../images/icon-facebook.svg";
import hamburger from "../images/icon-hamburger.svg";
import twitter from "../images/icon-twitter.svg";
import features1 from "../images/illustration-features-tab-1.svg";
import features2 from "../images/illustration-features-tab-2.svg";
import features3 from "../images/illustration-features-tab-3.svg";
import hero from "../images/illustration-hero.svg";
import logoFooter from "../images/logo-bookmark-footer.svg";
import logo from "../images/logo-bookmark.svg";
import chrome from "../images/logo-chrome.svg";
import firefox from "../images/logo-firefox.svg";
import opera from "../images/logo-opera.svg";

const images = {
  dots:dots,
  arrow:arrow,
  close:close,
  error:error,
  facebook:facebook,
  hamburger:hamburger,
  twitter:twitter,
  features1:features1,
  features2:features2,
  features3:features3,
  hero:hero,
  logoFooter:logoFooter,
  logo:logo,
  chrome:chrome,
  firefox:firefox,
  opera:opera,
};

const types = {
  icon:"",
  logo:"",
  illustration:"",
}

const Image = (props) => {
  const { name, type } = props;
  return <img src={images[name]} className={types[type]} alt="selected img" />;
};

export default Image;