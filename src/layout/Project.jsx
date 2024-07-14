import * as React from "react";
import { Box, ThemeProvider } from "@mui/material";
import bgImage from "../assets/bgImage.png";
import ProfileGIF from "../container/ProfileGIF";
import Contact from "./Contact";
import styled from "styled-components";

import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

import layer_full_img from "../assets/layer-full-img.jpeg";
import layer_img1 from "../assets/layer-img1.jpeg";
import layer_img2 from "../assets/layer-img2.jpeg";
import layer_img3 from "../assets/layer-img3.jpeg";
import layer_img4 from "../assets/layer-img4.jpeg";
import layer_img5 from "../assets/layer-img5.jpeg";

import spotify_full_img from "../assets/spotify-full-img.jpeg";
import spotify_img1 from "../assets/spotify-img1.jpeg";
import spotify_img2 from "../assets/spotify-img2.jpeg";
import spotify_img3 from "../assets/spotify-img3.jpeg";
import spotify_img4 from "../assets/spotify-img4.jpeg";
import spotify_img5 from "../assets/spotify-img5.jpeg";
import spotify_img6 from "../assets/spotify-img6.jpeg";

import tava_imag1 from "../assets/tava_imag1.jpeg";
import tava_imag2 from "../assets/tava_imag2.jpeg";
import tava_imag3 from "../assets/tava_imag3.jpeg";
import tava_mainImag from "../assets/tava_mainImag.jpeg";
import "./index.css";

export default function Project() {
  const [activeSkill, setActiveSkill] = React.useState("technical");

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "2rem",
        }}
      >
        <Box
          sx={{
            width: "85%",
            borderRadius: "0.5rem",
            padding: "2rem",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
        >
          <h1 className="text-[2rem] ">Projects</h1>
          <div className="m-10">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                className="text-4xl"
              >
                ReactJS
              </AccordionSummary>
              <AccordionDetails>
                <div className="project-cont flex justify-between">
                  <div className="flex gap-4 p-5">
                    <div>
                      <div>
                        <img
                          src={layer_full_img}
                          alt="layer-full-img"
                          className="w-44 hover:scale-125 cursor-pointer duration-200"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-10">
                      <div className="flex gap-2">
                        <img
                          src={layer_img1}
                          alt="layer-full-img"
                          className="w-40 hover:scale-125 cursor-pointer duration-200"
                        />
                        <img
                          src={layer_img2}
                          alt="layer-full-img"
                          className="w-40 hover:scale-125 cursor-pointer duration-200"
                        />
                        <img
                          src={layer_img3}
                          alt="layer-full-img"
                          className="w-40 hover:scale-125 cursor-pointer duration-200"
                        />
                      </div>
                      <div className="flex gap-2">
                        <img
                          src={layer_img4}
                          alt="layer-full-img"
                          className="w-40 hover:scale-125 cursor-pointer duration-200"
                        />
                        <img
                          src={layer_img5}
                          alt="layer-full-img"
                          className="w-40 hover:scale-125 cursor-pointer duration-200"
                        />
                        <img
                          src={layer_img3}
                          alt="layer-full-img"
                          className="w-40 hover:scale-125 cursor-pointer duration-200"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="project-desc p-5 text-black">
                    <div>
                      <h1 className="text-black text-[2rem] pb-2">
                        Layers-Skin
                      </h1>
                    </div>
                    <li>
                      User can Search, Navigate, Add items to cart, remove item
                      from cart.
                    </li>
                    <li>
                      Individual Navigation way for different mobile brands User
                      Friendly website.
                    </li>
                    <li>
                      {" "}
                      Login (Demo username:- layer and password:- 123456)
                    </li>
                    <h2 className="mt-5">
                      {" "}
                      This Website Layer create using React JS and Javascript.
                      It is a website in which user can Search Products,
                      <br /> Navigate individual Brands, Access cart.
                    </h2>
                    <div className="flex gap-5 mt-5">
                      <button
                        className="bg-transparent hover:bg-yellow-500 text-yellow-400 font-semibold hover:text-white py-2 px-4 border border-yellow-300 hover:border-transparent rounded"
                        onClick={() =>
                          window.open(
                            "https://647e7d4ea3156c3d4d08857e--stupendous-stardust-176183.netlify.app/"
                          )
                        }
                      >
                        Hosted URL
                      </button>
                      <button
                        className="bg-transparent hover:bg-yellow-500 text-yellow-400 font-semibold hover:text-white py-2 px-4 border border-yellow-300 hover:border-transparent rounded"
                        onClick={() =>
                          window.open(
                            "  https://github.com/vivek17sagar/Layers-Skin"
                          )
                        }
                      >
                        Code URL
                      </button>
                    </div>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
                className="text-4xl"
              >
                Javascript
              </AccordionSummary>
              <AccordionDetails>
                <div className="project-cont flex">
                  <div className="project-desc p-5 text-black">
                    <div>
                      <h1 className="text-black text-[2rem] pb-2">Spotify</h1>
                    </div>
                    <li>
                      User can play song and add his favourite songs to Liked
                      Song list and remove songs from liked song and one
                      <br /> thing user can play song from anywhere like from
                      liked song ,from create playlist, from search.
                    </li>
                    <li>
                      User also Search Songs and user can see dynamic color
                      effect on website. and experience better UI here.
                    </li>
                    <li>
                      It has also a signup and login option. User only can play
                      songs and enjoy functionality of webpage after login into
                      it.
                      <br /> (Demo username:- spotify and password:- 123456)
                    </li>
                    <h2 className="mt-5">
                      This app Spotify is a digital music, podcast, that gives
                      you access to millions of songs. Basic functions such as
                      <br /> playing music, you can Search music, you can store
                      your favourite songs in liked song list.
                    </h2>
                    <div className="flex gap-5 mt-5">
                      <button
                        className="bg-transparent hover:bg-yellow-500 text-yellow-400 font-semibold hover:text-white py-2 px-4 border border-yellow-300 hover:border-transparent rounded"
                        onClick={() =>
                          window.open(
                            "https://rainbow-melba-be891f.netlify.app/"
                          )
                        }
                      >
                        Hosted URL
                      </button>
                      <button
                        className="bg-transparent hover:bg-yellow-500 text-yellow-400 font-semibold hover:text-white py-2 px-4 border border-yellow-300 hover:border-transparent rounded"
                        onClick={() =>
                          window.open(
                            "https://github.com/vivek17sagar/Spotify-Clone"
                          )
                        }
                      >
                        Code URL
                      </button>
                    </div>
                  </div>
                  <div className="flex gap-4 ">
                    {/* <div>
                      <div>
                        <img
                          src={spotify_img2}
                          alt="layer-full-img"
                          className="w-40  hover:scale-125 cursor-pointer duration-200"
                        />
                      </div>
                    </div> */}
                    <div className="flex flex-col gap-10">
                      <div className="flex gap-2">
                        <img
                          src={spotify_img1}
                          alt="layer-full-img"
                          className="w-40 hover:scale-125 cursor-pointer duration-200"
                        />
                        <img
                          src={spotify_img2}
                          alt="layer-full-img"
                          className="w-40 hover:scale-125 cursor-pointer duration-200"
                        />
                        <img
                          src={spotify_img3}
                          alt="layer-full-img"
                          className="w-40 hover:scale-125 cursor-pointer duration-200"
                        />
                      </div>
                      <div className="flex gap-2">
                        <img
                          src={spotify_img4}
                          alt="layer-full-img"
                          className="w-40 hover:scale-125 cursor-pointer duration-200"
                        />
                        <img
                          src={spotify_img5}
                          alt="layer-full-img"
                          className="w-40 hover:scale-125 cursor-pointer duration-200"
                        />
                        <img
                          src={spotify_img6}
                          alt="layer-full-img"
                          className="w-40 hover:scale-125 cursor-pointer duration-200"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="project-cont flex justify-between">
                  <div className="flex gap-4 p-5">
                    {/* <div>
                      <div>
                        <img
                          src={tava_mainImag}
                          alt="layer-full-img"
                          className="w-44 hover:scale-125 cursor-pointer duration-200"
                        />
                      </div>
                    </div> */}
                    <div className="flex flex-col gap-10">
                      <div className="flex gap-2">
                        <img
                          src={tava_imag1}
                          alt="layer-full-img"
                          className="w-40 hover:scale-125 cursor-pointer duration-200"
                        />
                        <img
                          src={tava_imag2}
                          alt="layer-full-img"
                          className="w-40 hover:scale-125 cursor-pointer duration-200"
                        />
                        <img
                          src={tava_imag3}
                          alt="layer-full-img"
                          className="w-40 hover:scale-125 cursor-pointer duration-200"
                        />
                      </div>
                      <div className="flex gap-2">
                        <img
                          src={tava_imag3}
                          alt="layer-full-img"
                          className="w-40 hover:scale-125 cursor-pointer duration-200"
                        />
                        <img
                          src={tava_imag2}
                          alt="layer-full-img"
                          className="w-40 hover:scale-125 cursor-pointer duration-200"
                        />
                        <img
                          src={tava_imag1}
                          alt="layer-full-img"
                          className="w-40 hover:scale-125 cursor-pointer duration-200"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="project-desc p-5 text-black">
                    <div>
                      <h1 className="text-black text-[2rem] pb-2">
                        TAVA-Taskmaker
                      </h1>
                    </div>
                    <li>
                      User can add task and also track live expire time of your
                      task, delete tasks, get Alerts, pending tasks etc.
                    </li>
                    <li>
                      See all updates(Completed,Deleted,Pending) functionality,
                      track time functionality, Alert functionality, Sort
                      functionality.
                    </li>

                    <h2 className="mt-5">
                      {" "}
                      This app aids in task organization during the day.
                      <br /> The task has also have expire time before this you
                      want to complete it.
                      <br /> There are different section in page where you can
                      see all updated you did on TAVA.
                      <br /> You add task and also put the specific time in it
                      before which time uu will want to complete
                      <br /> it it will also give you alert and also the whole
                      task will be arranged in sorted manner every time
                      automatically.
                      <br /> soo it has many functionalities like that
                    </h2>
                    <div className="flex gap-5 mt-5">
                      <button
                        className="bg-transparent hover:bg-yellow-500 text-yellow-400 font-semibold hover:text-white py-2 px-4 border border-yellow-300 hover:border-transparent rounded"
                        onClick={() =>
                          window.open(
                            "https://647e7d4ea3156c3d4d08857e--stupendous-stardust-176183.netlify.app/"
                          )
                        }
                      >
                        Hosted URL
                      </button>
                      <button
                        className="bg-transparent hover:bg-yellow-500 text-yellow-400 font-semibold hover:text-white py-2 px-4 border border-yellow-300 hover:border-transparent rounded"
                        onClick={() =>
                          window.open(
                            "  https://github.com/vivek17sagar/Layers-Skin"
                          )
                        }
                      >
                        Code URL
                      </button>
                    </div>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
            {/* <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
                className="text-4xl"
              >
                HTML-CSS
              </AccordionSummary>
              <AccordionDetails></AccordionDetails>
            </Accordion> */}
          </div>
        </Box>
      </Box>
    </>
  );
}
