import { React, useState, useEffect, useRef } from "react";
import { gsap, MorphSVGPlugin } from "gsap-trial/all";
import Slider from "react-slick";
import { motion, useAnimationControls, AnimatePresence } from "framer-motion";
import {
  BsRocketFill,
  BsFillStarFill,
  BsFillLightningFill,
} from "react-icons/bs";
import { MininCard } from "./MiniCard";
import { cardFoxData } from "../foxCardData";

import "./Collection.css";

export const Collection = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [prevCardIndex, setPrevCardIndex] = useState(0);

  let settings = {
    autoplay: true,
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    // centerMode: true,
    // centerPadding: "0%",
    arrows: false,
    beforeChange: (current, next) => {
      setActiveCardIndex(next);
      setPrevCardIndex(current);
    },
  };
  const foxImageRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(MorphSVGPlugin);
    gsap.to(foxImageRef.current, {
      duration: 0.5,
      morphSVG: cardFoxData[activeCardIndex].path,
    });
  }, [activeCardIndex]);

  const cardImagesControl = useAnimationControls();
  const cardTitleControl = useAnimationControls();
  const paramsControl = useAnimationControls();
  const progressControl = useAnimationControls();
  const itemsControl = useAnimationControls();
  const descriptionControl = useAnimationControls();
  const rotateXControl = useAnimationControls();

  useEffect(() => {
    cardTitleControl.start({
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.5,
      },
    });

    paramsControl.start({
      scaleY: 1,
      transition: {
        duration: 0.3,
      },
    });

    descriptionControl.start({
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.4,
      },
    });

    rotateXControl.start({
      rotateX: "360deg",
      transition: {
        duration: 0.5,
      },
    });

    // paramsControl.start({
    //   rotateX: "360deg",
    //   transition: {
    //     duration: 0.5,
    //   },
    // });
  }, [activeCardIndex]);
  return (
    <div className="collectionCard">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          height: "100%",
          boxShadow: "0 0 7px #ffffff96",
          borderRadius: "50px",
        }}
      >
        <Slider {...settings} className="miniCarousel">
          {cardFoxData.map((cardFox, index) =>
            index === activeCardIndex ? (
              <MininCard img={cardFox.img} key={index} isActive={true} />
            ) : (
              <MininCard img={cardFox.img} key={index} isActive={false} />
            )
          )}
        </Slider>

        <motion.div
          ref={foxImageRef}
          className="foxCardImage"
          style={{
            width: "40%",
            height: "100%",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 -27 709 1024"
            version="1.1"
          >
            <defs>
              <pattern
                id="fill"
                patternUnits="userSpaceOnUse"
                viewBox="0 0 700 1000"
                x="0"
                y="0"
                width="100%"
                height="100%"
              >
                <AnimatePresence>
                  <motion.image
                    key={cardFoxData[activeCardIndex].img}
                    src={cardFoxData[activeCardIndex].img}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    href={cardFoxData[activeCardIndex].img}
                    width="709px"
                    height="1024px"
                  />
                </AnimatePresence>
              </pattern>
            </defs>

            <path
              ref={foxImageRef}
              key={`path${cardFoxData[activeCardIndex].id}`}
              id={`fox_card${cardFoxData.id}`}
              fill="url(#fill)"
              d={cardFoxData[prevCardIndex].path}
              stroke="none"
              fillRule="evenodd"
            />
          </svg>
          {/* <AnimatePresence>
            <motion.img
              key={cardFoxData[activeCardIndex].img}
              src={cardFoxData[activeCardIndex].img}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            />
          </AnimatePresence> */}
        </motion.div>

        <div className="descriptionBlock">
          <motion.div className="cardTitle">
            <motion.h1
              key={cardFoxData[activeCardIndex].id}
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {cardFoxData[activeCardIndex].name} #{activeCardIndex + 1}
            </motion.h1>

            <motion.span
              key={`profession${cardFoxData[activeCardIndex].id}`}
              initial={{ filter: "blur(5px)" }}
              animate={{ filter: "blur(0px)" }}
              transition={{ duration: 0.3 }}
            >
              {cardFoxData[activeCardIndex].profession},{" "}
              {cardFoxData[activeCardIndex].specialization}
            </motion.span>
          </motion.div>

          <div className="dataBlock">
            <div className="paramsBlock">
              <div className="params">
                <motion.p>
                  Gender
                  <motion.span
                    key={`param1${cardFoxData[activeCardIndex].id}`}
                    initial={{ scaleY: 0 }}
                    animate={paramsControl}
                  >
                    {cardFoxData[activeCardIndex].gender}
                  </motion.span>
                </motion.p>
                <motion.p>
                  Color
                  <motion.span
                    key={`param2${cardFoxData[activeCardIndex].id}`}
                    initial={{ scaleY: 0 }}
                    animate={paramsControl}
                  >
                    {cardFoxData[activeCardIndex].color}
                  </motion.span>
                </motion.p>
              </div>

              <div className="params">
                <motion.p>
                  Age
                  <motion.span
                    key={`param3${cardFoxData[activeCardIndex].id}`}
                    initial={{ scaleY: 0 }}
                    animate={paramsControl}
                  >
                    {cardFoxData[activeCardIndex].age}
                  </motion.span>
                </motion.p>
                <motion.p>
                  Location
                  <motion.span
                    key={`param4${cardFoxData[activeCardIndex].id}`}
                    initial={{ scaleY: 0 }}
                    animate={paramsControl}
                  >
                    {cardFoxData[activeCardIndex].location}
                  </motion.span>
                </motion.p>
              </div>
            </div>
            <div className="progressBlock">
              <div className="progressItem">
                <BsRocketFill
                  color="#d6a0ffd7"
                  size={"2em"}
                  style={{ width: "5%" }}
                />
                <div className="progressBar">
                  <motion.div
                    key={cardFoxData[activeCardIndex].progress.param1}
                    initial={{
                      width: `${cardFoxData[prevCardIndex].progress.param1}%`,
                    }}
                    animate={{
                      width: `${cardFoxData[activeCardIndex].progress.param1}%`,
                    }}
                    transition={{ duration: 1 }}
                    className="progressFill"
                    style={{
                      width: `${cardFoxData[activeCardIndex].progress.param1}%`,
                    }}
                  ></motion.div>
                </div>
              </div>
              <div className="progressItem">
                <BsFillStarFill
                  color="#d6a0ffd7"
                  size={"2em"}
                  style={{ width: "5%" }}
                />
                <div className="progressBar">
                  <motion.div
                    key={cardFoxData[activeCardIndex].progress.param2}
                    initial={{
                      width: `${cardFoxData[prevCardIndex].progress.param2}%`,
                    }}
                    animate={{
                      width: `${cardFoxData[activeCardIndex].progress.param2}%`,
                    }}
                    transition={{ duration: 1 }}
                    className="progressFill"
                    style={{
                      width: `${cardFoxData[activeCardIndex].progress.param2}%`,
                    }}
                  ></motion.div>
                </div>
              </div>
              <div className="progressItem">
                <BsFillLightningFill
                  color="#d6a0ffd7"
                  size={"2em"}
                  style={{ width: "5%" }}
                />
                <div className="progressBar">
                  <motion.div
                    key={cardFoxData[activeCardIndex].progress.param3}
                    initial={{
                      width: `${cardFoxData[prevCardIndex].progress.param3}%`,
                    }}
                    animate={{
                      width: `${cardFoxData[activeCardIndex].progress.param3}%`,
                    }}
                    transition={{ duration: 1 }}
                    className="progressFill"
                    style={{
                      width: `${cardFoxData[activeCardIndex].progress.param3}%`,
                    }}
                  ></motion.div>
                </div>
              </div>
            </div>

            <div className="items">
              <p>
                Population
                <motion.span
                  key={`population${cardFoxData[activeCardIndex].id}`}
                  initial={{ rotateX: "0deg" }}
                  animate={rotateXControl}
                >
                  {cardFoxData[activeCardIndex].population}
                </motion.span>
              </p>
              <p>
                Flights
                <motion.span
                  key={`flights${cardFoxData[activeCardIndex].id}`}
                  initial={{ rotateX: "0deg" }}
                  animate={rotateXControl}
                >
                  {cardFoxData[activeCardIndex].flights}
                </motion.span>
              </p>
              <p>
                Stars
                <motion.span
                  key={`stars${cardFoxData[activeCardIndex].id}`}
                  initial={{ rotateX: "0deg" }}
                  animate={rotateXControl}
                >
                  {cardFoxData[activeCardIndex].stars}
                </motion.span>
              </p>
              <p>
                Energy
                <motion.span
                  key={`energy${cardFoxData[activeCardIndex].id}`}
                  initial={{ rotateX: "0deg" }}
                  animate={rotateXControl}
                >
                  {cardFoxData[activeCardIndex].energy}
                </motion.span>
              </p>
            </div>
            <div className="foxDescr">
              <motion.p
                key={`description${cardFoxData[activeCardIndex].id}`}
                initial={{ opacity: 0, scale: 0.3, filter: "blur(20px)" }}
                animate={descriptionControl}
              >
                {cardFoxData[activeCardIndex].description}
              </motion.p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between  ",
                alignItems: "center",
                marginTop: "1rem",
                padding: "0 1rem",
              }}
            >
              <p
                style={{
                  textTransform: "uppercase",
                }}
              >
                Favorite Genre
              </p>
              <motion.span
                key={`fav_gen${cardFoxData[activeCardIndex].id}`}
                initial={{ scaleY: 0 }}
                animate={paramsControl}
                style={{
                  color: "#E1A1FF",
                  fontSize: "1.1rem",
                  textTransform: "uppercase",
                }}
              >
                {cardFoxData[activeCardIndex].fav_genre}
              </motion.span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
