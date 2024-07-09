import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import profilePic from "../assets/DP4.jpg"
import { Fade } from "react-awesome-reveal"

const Home = () => {


  useEffect(() => {
    gsap.config({ trialWarn: false });
    gsap.registerPlugin(ScrollTrigger);

    const nameElement = document.getElementById("animated-name");
    const split = new SplitType(nameElement, { type: "chars" }); // Use SplitType

    split.chars.forEach((charElement, index) => {
      const timeline = gsap.timeline({ paused: true });

      timeline
        .fromTo(charElement, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.1, ease: "power3.inOut" })
        .to(charElement, { color: "linear-gradient(194deg, rgba(185,178,189,1) 0%, rgba(85,82,80,1) 50%, rgba(152,145,134,1) 100%)", duration: 0.5, ease: "none", scrollTrigger: { trigger: nameElement, start: "top center", end: "bottom center", scrub: true } });

      timeline.play();
    });
  }, []);

  return (
    <div className="h-auto flex flex-col font-Teko">
      <div className="flex justify-around m-[6rem]">
        {/* <div className="text-[4rem]">
          <p>Frontend Developer</p>
          <p></p>
        </div> */}
        <div className="text-[4rem]">
            Hi, I'm a/an 
          <span className="inline-flex flex-col h-[5rem] md:h-[5rem] overflow-hidden">
          <ul className="block animate-text-slide-3 text-left leading-tight [&_li]:block ml-[0.5rem]">
                <li> Frontend Developer</li>
                <li> UI/UX Designer</li>
                <li> Otaku</li>
                <li aria-hidden="true">Frontend Developer</li>
          </ul>
          </span>
          <div className="text-[2rem]">
              <p>I currently reside in Noida, India</p>
          </div>
        </div>
        <div>
          <img src={profilePic} alt="" className="" />
        </div>
      </div>
      <div className=" items-baseline flex gap-3 justify-center text-7xl">
        <Fade cascade triggerOnce="true">
          <h2 className="text-center">
            Sai
          </h2>
          <h2 className="text-center ">
            Aryan
          </h2>
          <h2 className="text-center">
            Goswami
          </h2>
        </Fade>
      </div>
    </div>
  );
}

export default Home;
