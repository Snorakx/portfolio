import React, { FC, useEffect } from "react";
import { MdEmail, MdPhoneIphone } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Aos from "aos";

const ContactContent: FC = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="contact-wrapper">
      <div data-aos="fade-up" className="contact-item">
        <div className="contact-icon">
          <MdEmail className="icon" />
        </div>
        <div className="contact-label">
          Email
          <br />
          <a href="mailto: patrykkoziel119@gmail.com">
            patrykkoziel119@gmail.com
          </a>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-delay="250" className="contact-item">
        <div className="contact-icon">
          <MdPhoneIphone className="icon" />
        </div>
        <div className="contact-label">
          Phone <br />
          <a href="tel:501-509-662">501-509-662</a>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-delay="500" className="contact-item">
        <div className="contact-icon">
          <FaLinkedin className="icon" />
        </div>
        <div className="contact-label">
          <a href="https://www.linkedin.com/in/patryk-kozieł/" target="_blank">
            Zobacz
            <br />
            LinkedIn
          </a>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-delay="1000" className="contact-item">
        <div className="contact-icon">
          <FaGithub className="icon" />
        </div>
        <div className="contact-label">
          <a href="https://github.com/Snorakx" target="_blank">
            Zobacz
            <br />
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
