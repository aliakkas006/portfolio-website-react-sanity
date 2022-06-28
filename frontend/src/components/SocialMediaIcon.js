import React from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMediaIcon = () => (
  <div className="app__social">
    <div>
      <BsLinkedin />
    </div>

    <div>
      <BsGithub />
    </div>

    <div>
      <BsTwitter />
    </div>

    <div>
      <FaFacebookF />
    </div>
  </div>
);

export default SocialMediaIcon;
