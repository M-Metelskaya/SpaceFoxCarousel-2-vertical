import { React, useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import {
  motion,
  useAnimationControls,
  AnimatePresence,
  useAnimation,
} from "framer-motion";
import {
  BsRocketFill,
  BsFillStarFill,
  BsFillLightningFill,
} from "react-icons/bs";

import "./Collection.css";

export const Collection = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [prevCardIndex, setPrevCardIndex] = useState(0);
  // const cardImages = [
  //   "./fox_card1.png",
  //   "./fox_card2.png",
  //   "./fox_card3.png",
  //   "./fox_card4.png",
  // ];

  const cardFoxes = [
    {
      id: 0,
      name: "Space Fox",
      description:
        "Surgical specialist in the field of medicine, who is distinguished by high precision in his work.",
      img: "./fox_card1.png",
      gender: "Male",
      color: "White",
      age: 5,
      location: "Earth",
      profession: "Healer",
      specialization: "Surgeon",
      population: 1000,
      flights: 21,
      stars: 583,
      energy: "1237",
      fav_genre: "Resourcefulness",
      progress: {
        param1: 20,
        param2: 80,
        param3: 10,
      },
    },

    {
      id: 1,
      name: "Space Fox",
      description:
        "She has a degree in biochemistry, is distinguished by high intelligence and prudence.",
      img: "./fox_card2.png",
      gender: "Female",
      color: "Red",
      age: 7,
      location: "Earth",
      profession: "Scientist",
      specialization: "Biochemist",
      population: 300,
      flights: 9,
      stars: 480,
      energy: 1900,
      fav_genre: "Discipline",
      progress: {
        param1: 50,
        param2: 20,
        param3: 20,
      },
    },
    {
      id: 2,
      name: "Space Fox",
      description:
        "Has a fast response and excellent health Successfully completed a pilot training course.",
      img: "./fox_card4.png",
      gender: "Male",
      color: "Red",
      age: 8,
      location: "Earth",
      profession: "Military",
      specialization: "Pilot",
      population: 1500,
      flights: 15,
      stars: 461,
      energy: 2007,
      fav_genre: "Tactics",
      progress: {
        param1: 90,
        param2: 50,
        param3: 90,
      },
    },
    {
      id: 3,
      name: "Space Fox",
      description:
        "Successfully completed a training course for a young fighter and was awarded a medal for courage.",
      img: "./fox_card3.png",
      gender: "Female",
      color: "White",
      age: 4,
      location: "Earth",
      profession: "Military",
      specialization: "Infantryman",
      population: 550,
      flights: 14,
      stars: 349,
      energy: 2500,
      fav_genre: "Courage",
      progress: {
        param1: 30,
        param2: 10,
        param3: 70,
      },
    },
  ];
  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          position: "static",
          transform: "rotate(90deg",
          margin: "0 40%",
          width: "30px",
          height: "30px",
        }}
        onClick={onClick}
      ></div>
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          position: "static",
          transform: "rotate(90deg)",
          margin: "0 40%",
          width: "30px",
          height: "30px",
        }}
        onClick={onClick}
      ></div>
    );
  };
  let settings = {
    // autoplay: true,
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    // centerMode: true,
    // centerPadding: "0%",
    arrows: false,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,

    beforeChange: (current, next) => {
      setActiveCardIndex(next);
      setPrevCardIndex(current);
    },
  };
  const foxImageRef = useRef(null);

  // useEffect(() => {
  //   new hoverEffect({
  //     parent: foxImageRef.current,
  //     intensity: 0.3,
  //     image1: "/fox_card1.png",
  //     image2: "/fox_card2.png",
  //     // image1: `${cardFoxes[prevCardIndex].img}`,
  //     // image2: `${cardFoxes[activeCardIndex].img}`,
  //     displacementImage: "smoke_temp.png",
  //     // hover: false,
  //     // next: activeCardIndex,
  //     // previous: prevCardIndex,
  //   });
  // });

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
          {cardFoxes.map((cardFox, index) =>
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
          style={{ width: "40%", height: "100%" }}
        >
          <AnimatePresence>
            <motion.img
              key={cardFoxes[activeCardIndex].img}
              src={cardFoxes[activeCardIndex].img}
              initial={{ opacity: 0, filter: "brightness(0px)" }}
              animate={{ opacity: 1, filter: "brightness(0px)" }}
              exit={{ opacity: 0, filter: "brightness(2)" }}
              transition={{ delay: 0.1, duration: 0.5 }}
            />
          </AnimatePresence>
        </motion.div>

        <div className="descriptionBlock">
          <motion.div className="cardTitle">
            <motion.h1
              key={cardFoxes[activeCardIndex].id}
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {cardFoxes[activeCardIndex].name} #{activeCardIndex + 1}
            </motion.h1>

            <motion.span
              key={`profession${cardFoxes[activeCardIndex].id}`}
              initial={{ filter: "blur(5px)" }}
              animate={{ filter: "blur(0px)" }}
              transition={{ duration: 0.3 }}
            >
              {cardFoxes[activeCardIndex].profession},{" "}
              {cardFoxes[activeCardIndex].specialization}
            </motion.span>
          </motion.div>

          <div className="dataBlock">
            <div className="paramsBlock">
              <div className="params">
                <motion.p>
                  Gender
                  <motion.span
                    key={`param1${cardFoxes[activeCardIndex].id}`}
                    initial={{ scaleY: 0 }}
                    animate={paramsControl}
                  >
                    {cardFoxes[activeCardIndex].gender}
                  </motion.span>
                </motion.p>
                <motion.p>
                  Color
                  <motion.span
                    key={`param2${cardFoxes[activeCardIndex].id}`}
                    initial={{ scaleY: 0 }}
                    animate={paramsControl}
                  >
                    {cardFoxes[activeCardIndex].color}
                  </motion.span>
                </motion.p>
              </div>

              <div className="params">
                <motion.p>
                  Age
                  <motion.span
                    key={`param3${cardFoxes[activeCardIndex].id}`}
                    initial={{ scaleY: 0 }}
                    animate={paramsControl}
                  >
                    {cardFoxes[activeCardIndex].age}
                  </motion.span>
                </motion.p>
                <motion.p>
                  Location
                  <motion.span
                    key={`param4${cardFoxes[activeCardIndex].id}`}
                    initial={{ scaleY: 0 }}
                    animate={paramsControl}
                  >
                    {cardFoxes[activeCardIndex].location}
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
                    key={cardFoxes[activeCardIndex].progress.param1}
                    initial={{
                      width: `${cardFoxes[prevCardIndex].progress.param1}%`,
                    }}
                    animate={{
                      width: `${cardFoxes[activeCardIndex].progress.param1}%`,
                    }}
                    transition={{ duration: 1 }}
                    className="progressFill"
                    style={{
                      width: `${cardFoxes[activeCardIndex].progress.param1}%`,
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
                    key={cardFoxes[activeCardIndex].progress.param2}
                    initial={{
                      width: `${cardFoxes[prevCardIndex].progress.param2}%`,
                    }}
                    animate={{
                      width: `${cardFoxes[activeCardIndex].progress.param2}%`,
                    }}
                    transition={{ duration: 1 }}
                    className="progressFill"
                    style={{
                      width: `${cardFoxes[activeCardIndex].progress.param2}%`,
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
                    key={cardFoxes[activeCardIndex].progress.param3}
                    initial={{
                      width: `${cardFoxes[prevCardIndex].progress.param3}%`,
                    }}
                    animate={{
                      width: `${cardFoxes[activeCardIndex].progress.param3}%`,
                    }}
                    transition={{ duration: 1 }}
                    className="progressFill"
                    style={{
                      width: `${cardFoxes[activeCardIndex].progress.param3}%`,
                    }}
                  ></motion.div>
                </div>
              </div>
            </div>

            <div className="items">
              <p>
                Population
                <motion.span
                  key={`population${cardFoxes[activeCardIndex].id}`}
                  initial={{ rotateX: "0deg" }}
                  animate={rotateXControl}
                >
                  {cardFoxes[activeCardIndex].population}
                </motion.span>
              </p>
              <p>
                Flights
                <motion.span
                  key={`flights${cardFoxes[activeCardIndex].id}`}
                  initial={{ rotateX: "0deg" }}
                  animate={rotateXControl}
                >
                  {cardFoxes[activeCardIndex].flights}
                </motion.span>
              </p>
              <p>
                Stars
                <motion.span
                  key={`stars${cardFoxes[activeCardIndex].id}`}
                  initial={{ rotateX: "0deg" }}
                  animate={rotateXControl}
                >
                  {cardFoxes[activeCardIndex].stars}
                </motion.span>
              </p>
              <p>
                Energy
                <motion.span
                  key={`energy${cardFoxes[activeCardIndex].id}`}
                  initial={{ rotateX: "0deg" }}
                  animate={rotateXControl}
                >
                  {cardFoxes[activeCardIndex].energy}
                </motion.span>
              </p>
            </div>
            <div className="foxDescr">
              <motion.p
                key={`description${cardFoxes[activeCardIndex].id}`}
                initial={{ opacity: 0, scale: 0.3, filter: "blur(20px)" }}
                animate={descriptionControl}
              >
                {cardFoxes[activeCardIndex].description}
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
                key={`fav_gen${cardFoxes[activeCardIndex].id}`}
                initial={{ scaleY: 0 }}
                animate={paramsControl}
                style={{
                  color: "#E1A1FF",
                  fontSize: "1.1rem",
                  textTransform: "uppercase",
                }}
              >
                {cardFoxes[activeCardIndex].fav_genre}
              </motion.span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const MininCard = ({ img, isActive }) => {
  return (
    <div className={isActive ? "miniCard active" : "miniCard"}>
      <img
        src={img}
        style={{
          width: "100% ",
        }}
      />
    </div>
  );
};
