import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Logo from "../assets/luffy-dp2.jpg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Navbar = () => {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const dropdownRef = useRef(null); // Ref for dropdown element

  const { contextSafe } = useGSAP({ scope: containerRef }); // Scoping for animations

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogoHover = () => {
    setIsDropdownOpen(true);
    gsap.to([logoRef.current], { // Target both logo and dropdown
      duration: 1, // Adjust duration as needed
      ease: 'power3.inOut', // Adjust easing for smooth rotation
      rotation: 360,
    });
  };

  const handleLogoLeave = () => {
    setIsDropdownOpen(false);
    gsap.to([logoRef.current], { // Target both logo and dropdown
      duration: 0.5, // Adjust duration for quicker reset
      ease: 'power3.inOut', // Adjust easing for smooth reset
      rotation: 0,
    });
  };

  useGSAP(() => {
    // Combine the best of both worlds:
    // - Initial opacity: 0 for a hidden state
    // - Delay for a smooth transition on open
    // - Animate opacity to 1 for visibility
    // - Adjust these values as needed
    gsap.to(dropdownRef.current, {
      delay: 0.5, // Adjust delay for desired timing
      duration: 0.3, // Adjust duration for smooth animation
      ease: 'power3.inOut', // Adjust easing for desired effect
    });
  });

  return (
    <div ref={containerRef}>
        <nav className="bg-transparent px-[1rem] py-[2rem] mx-[5rem] flex justify-between font-Teko text-[24px]">
                <div className="dropdown dropdown-hover"
                >
                    <img
                      tabIndex={0}
                      role='button'
                      src={Logo}
                      alt="luffydp"
                      className="h-[2rem] w-[2rem] rounded-t-md cursor-none"
                      ref={logoRef}
                      onMouseEnter={handleLogoHover}
                      onMouseLeave={handleLogoLeave}
                    />
                    <ul tabIndex={0} className="dropdown-content items-start z-[1] menu bg-slate-300 rounded-b-md w-auto pr-[0.5rem] rounded-r-md" 
                    ref={dropdownRef}
                    >
                      <li><a href="https://github.com/SaiAryan1784" target='_blank' className=" hover:bg-slate-400"><FaGithub/></a></li>
                      <li><a href="https://www.linkedin.com/in/saiaryangoswami/" target='_blank' className=" hover:bg-slate-400"><FaLinkedin/></a></li>
                      <li><a href="https://www.linkedin.com/in/saiaryangoswami/" target='_blank' className=" hover:bg-slate-400"><FaInstagram/></a></li>
                      <li><a href="https://www.linkedin.com/in/saiaryangoswami/" target='_blank' className=" hover:bg-slate-400"><FaTwitter/></a></li>
                    </ul>
                </div>
            <h2>SAG.exe</h2>
            <ul className="gap-[1rem] flex justify-around">
                <li>Home</li>
                <li>About</li>
                <li>Project</li>
                <li>
                    <a href="">Contact</a>
                </li>
            </ul>
        </nav>
    </div>
    );
};

export default Navbar;
