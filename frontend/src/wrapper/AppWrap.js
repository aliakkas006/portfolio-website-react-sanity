import React from "react";
import { NavigationDots, SocialMediaIcon } from "../components";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMediaIcon />
        <div className="app__wrapper app__flex">
          <Component />

          <div className="copyright">
            <p className="p-text">c@2020 Ali Akkas</p>
            <p className="p-text">All rights reserved</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
