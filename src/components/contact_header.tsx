import React, { FC, useEffect } from "react";
import Aos from "aos";

const TechnologiesHeader: FC = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div data-aos="fade-up" className="contact-header-wrapper">
      <div className="contact-header">Contact</div>
      <div
        data-aos="fade-right"
        data-aos-delay="1000"
        className="underline"
      ></div>
    </div>
  );
};

export default TechnologiesHeader;
