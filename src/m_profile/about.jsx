import React from "react";

const About = () => {
  return (
    <div id="about" className="py-5 abt-me">
      <div className="row m-3 pt-2">
        <div className="col-md-3 ">
          <div>
            <img alt="" className="avatar2 justify-content-center" />
          </div>
        </div>

        <div className="col-md-9 ">
          <div className="p-abt text-center text-white">
            <p className="p-title ">
              <strong> ABOUT ME </strong>
            </p>
            <p className="m-3 ">
              Hi there! I'm Valentine-Marie Umeh, a passionate web developer
              with a flair for crafting clean, user-friendly interfaces. I
              thrive on turning ideas into beautiful, functional websites and
              applications. My goal is to not just write code, but to create
              seamless digital experiences that delight users. I thrive in
              collaborative environments, where I can leverage my creativity and
              problem-solving abilities to bring projects to life. Let's build
              something amazing together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
