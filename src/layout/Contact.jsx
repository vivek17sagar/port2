import React from "react";
import linkdin from "../assets/linkdin.gif";
import git from "../assets/git.png";
import gmail from "../assets/mail.gif";
import leet from "../assets/leet.png";

const Contact = () => {
  return (
    <div className="absolute bottom-48 flex flex-col gap-5">
      <div
        className="absolute transition-all p-2 pr-8 delay-150 rounded-r-lg   flex gap-4 overflow-hidden bg-[#ffb400] text-black font-semibold -left-[70px] hover:left-0 duration-400 cursor-pointer"
        onClick={() =>
          window.open("https://www.linkedin.com/in/vivek-sagar-895645213/")
        }
      >
        <div>Linkdin</div> <img src={linkdin} />
      </div>
      <div
        className="absolute transition-all p-2 pr-8 delay-150 rounded-r-lg flex gap-4 overflow-hidden top-[3rem] bg-[#ffb400] text-black font-semibold -left-[67px] hover:left-0 duration-400 cursor-pointer"
        onClick={() => window.open("https://github.com/vivek17sagar")}
      >
        <div>Github</div> <img className="w-6" src={git} />
      </div>
      <div
        className="absolute transition-all p-2 pr-8 delay-150 rounded-r-lg flex gap-4 overflow-hidden top-[6rem] bg-[#ffb400] text-black font-semibold -left-[60px] hover:left-0 duration-400 cursor-pointer"
        onClick={() => window.open("https://leetcode.com/viveksagar17/")}
      >
        <div>Gmail</div> <img className="w-6" src={gmail} />
      </div>
      <div
        className="absolute transition-all p-2 pr-8 delay-150 rounded-r-lg flex gap-4 overflow-hidden top-[9rem] bg-[#ffb400] text-black font-semibold -left-[84px] hover:left-0 duration-400 cursor-pointer"
        onClick={() => window.open("https://leetcode.com/viveksagar17/")}
      >
        <div>Leetcode</div> <img className="w-6" src={leet} />
      </div>
    </div>
  );
};

export default Contact;
