import React from "react";
import { FaFacebookF, FaInstagram, FaGlobe } from "react-icons/fa";

export default function SocialIcons() {
  return (
    <div className="d-flex justify-content-end gap-3 mt-3">
      {/* <a href="#" className="text-warning fs-4"><FaFacebookF /></a> */}
      <a href="https://www.instagram.com/elbab.elawthaq/?igsh=MWFuZmJxMXY3eWFnbQ%3D%3D#" className="text-warning fs-4"><FaInstagram /></a>
      <a href="https://www.elbab-elawthaq.com/" target="blank" className="text-warning fs-4"><FaGlobe /></a>
    </div>
  );
}
