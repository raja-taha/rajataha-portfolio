import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import logo from "../assets/logo1_1.png";

const Home = () => {
  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };

  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I am <br />
            Muhammad Taha
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A Developer", "A Designer", "A Creater"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="mailto:rajataha062@gmail.com">Hire Me</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>

          <article>
            <p>
              +<span>100</span>
            </p>
            <span>Clients Worldwide</span>
          </article>

          <aside>
            <article>
              <p>
                +<span>500</span>
              </p>
              <span>Projects Done</span>
            </article>

            <article data-special>
              <p>Contact</p>
              <span>rajataha062@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>

      <section>
        <img src={logo} alt="Muhammad Taha" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
