import React from "react";
import RPSComponent from "../components/RPSComponent";
import TriviaPage from "./TriviaPage";
import WordGuesserComponent from "../components/WordGuesserComponent";
import kingImage from "../images/king.png";
import ortizImage from "../images/ortiz.png";
import sotoImage from "../images/soto.png";
import jacksonImage from "../images/jackson.png";
import rogersImage from "../images/rogers.png";
import devBackground from "../images/dev-background.jpg";
import wallpaperImage from "../images/wallpaper.png";
import rpsBackGround from "../images/rpsBackground.png";
import controllerImage from "../images/controller.jpg";
import spaceImage from "../images/space.jpg";
import teamImage from "../images/team.jpg";

const HomePage = () => {
  const sectionStyle = {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#add8e6",
    marginTop: "20px", // Adjust the marginTop value to bring the section closer to the top
  };

  const horizontalContainersStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "40px",
    padding: "20px",
    height: "250px",
  };

  const containerItemStyle = {
    flex: 1,
    backgroundColor: "#ddd",
    border: "1px solid #999",
    padding: "20px",
    margin: "0 40px",
    height: "100%", // Set height to 100% to match the height of the horizontal containers
    width: "250px", // Adjust the width to make the containers wider
    borderRadius: 15,
  };

  const placeholderBoxStyle = {
    width: "300px",
    height: "200px",
    backgroundColor: "#ddd",
    border: "1px solid #999",
    padding: "20px",
    margin: "20px",
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const homeSectionStyle = {
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    textAlign: "center",
    marginTop: "0px",
    backgroundImage: `url(${wallpaperImage}), linear-gradient(to right, violet, indigo, blue, green, yellow, orange, red)`,
    backgroundSize: "100% 100%",
  };

  const homeBannerStyle = {
    width: "100vw",
  };

  const containerModel = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    height: "65vh",
    padding: "40px",
    marginTop: "150px",
    borderRadius: 15,
  };

  const imageHorizontalContainers = {
    display: "flex",
    justifyContent: "space-evenly",
    padding: " 0 40px 0 40px",
  };

  const imageContainerModel = {
    height: "300px",
    width: "275px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
    border: "10px solid yellow",
    /*  backgroundImage: `url(${controllerImage})`, */
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    borderRadius: 15,
  };

  const subContainerModel = {
    width: "270px",
    height: "220px",
    padding: "3px",
    borderRadius: 10,
    textAlign: "center",
    fontSize: "20px",
    color: "white",
    fontFamily: "Arial, sans-serif",
  };

  const buttonStyle = {
    width: "100px",
    height: "100px",
    backgroundColor: "limeGreen",
    cursor: "pointer",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontWeight: "bold",
  };

  /* Daniel King's container style const below this comment until sections begin */

  const comboAboutAndContactSectionStyle = {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#add8e6",
    marginTop: "20px", // Adjust the marginTop value to bring the section closer to the top
  };

  const aboutContainerStyle = {
    ...containerItemStyle,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    flexWrap: "nowrap",
    width: "90vw",
  };

  const personContainerStyle = {
    backgroundColor: "#f5f5f5", // Background color resembling an office
    border: "1px solid #ccc", // Lighter border
    borderRadius: 10, // Soft rounded corners
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)", // Shadow effect

    width: "15vw",
    padding: "10px", // Padding for content
    margin: "10px", // Margin between containers
  };

  const contactSubsectionContainerStyle = {
    ...containerItemStyle,
    display: "flex",
    flexDirection: "column",
  };

  return (
    <div>
      <h1>Welcome to the Home Page!</h1>{" "}
      {/* this is behind the nav bar... is it deprecated? */}
      {/* Section 1 Begin */}
      <section style={{ ...homeSectionStyle }} id="section1">
        <div style={{ ...homeBannerStyle }}>
          <div style={imageHorizontalContainers}>
            <div style={containerModel}>
              <div
                style={{
                  ...imageContainerModel,
                  backgroundImage: `url(${controllerImage})`,
                }}
                onClick={() => scrollToSection("section2")}
              ></div>
              <div style={subContainerModel}>
                <p>
                  Embark on a journey of fun and learning! Dive into educational
                  games like Rock, Paper, Scissors, explore trivia about art,
                  science, and history, and challenge your mind with word
                  guessers. Adventure awaits!
                </p>
              </div>
              <div
                style={buttonStyle}
                onClick={() => scrollToSection("section2")}
              >
                PLAY NOW
              </div>
            </div>

            <div style={containerModel}>
              <div
                style={{
                  ...imageContainerModel,
                  backgroundImage: `url(${spaceImage})`,
                }}
              ></div>
              <div style={subContainerModel}>
                <p>
                  Begin an exciting journey of learning! Dive into the wonders
                  of science, art, and history. Ignite curiosity and exploration
                  in a world of endless possibilities. Join us for an
                  educational adventure!
                </p>
              </div>
              <div
                style={buttonStyle}
                onClick={() => scrollToSection("section5")}
              >
                LEARN NOW
              </div>
            </div>

            <div style={containerModel}>
              <div
                style={{
                  ...imageContainerModel,
                  backgroundImage: `url(${teamImage})`,
                }}
              ></div>
              <div style={subContainerModel}>
                <p>
                  Discover the magic behind the scenes! Dive into our "About Us"
                  page to meet the creators and explore the inspiration that
                  fuels this educational adventure. Join us on this fascinating
                  journey!
                </p>
              </div>
              <div
                style={buttonStyle}
                onClick={() => scrollToSection("section6")}
              >
                MEET US
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section 2 Begin */}
      <section
        style={{ ...sectionStyle, backgroundImage: `url(${rpsBackGround})` }}
        id="section2"
      >
        <div className="container">
          <div
            style={{
              ...placeholderBoxStyle,
              backgroundColor: "rgba(255, 240, 200, 0.8)",
              borderRadius: "70px",
            }}
          >
            <RPSComponent />
          </div>
        </div>
      </section>
      <section
        style={{ ...sectionStyle, backgroundColor: "green" }}
        id="section3"
      >
        <div className="container">
          <TriviaPage />
          <div style={placeholderBoxStyle}>
            <p>Content for Section 3</p>
          </div>
        </div>
      </section>
      <section
        style={{ ...sectionStyle, backgroundColor: "red" }}
        id="section4"
      >
        <div className="container">
          <WordGuesserComponent />
          <div style={placeholderBoxStyle}>
            <p>Content for Section 4</p>
          </div>
        </div>
      </section>
      <section
        style={{ ...sectionStyle, backgroundColor: "pink" }}
        id="section5"
      >
        <div style={horizontalContainersStyle}>
          <div style={containerItemStyle}>
            <button id="nasaBtn">NASA</button>
          </div>
          <div style={containerItemStyle}>
            <button
              id="metBtn"
              onClick={fetch("http://localhost:8080/arts", {
                method: "GET",
                headers: { "Content-Type": "application/json" },
              })}
            >
              Metropolitan Museum of Art
            </button>
          </div>
          <div style={containerItemStyle}>
            <button id="factsBtn">Facts</button>
          </div>
        </div>
      </section>
      {/* About and Contact section */}
      <section
        style={{
          ...comboAboutAndContactSectionStyle,
          backgroundColor: "brown",
        }}
        id="section6"
      >
        <div>
          {" "}
          {/* div to separate subsections about & contact */}
          {/* AboutPage */}
          <div className="container">
            <div
              style={{
                ...aboutContainerStyle,
                backgroundImage: `url(${devBackground})`,
                backgroundSize: "cover",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div>
                <h1
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    display: "inline-block",
                    padding: "10px",
                  }}
                >
                  About the Creators
                </h1>

                <div style={{ ...{ display: "flex", flexDirection: "row" } }}>
                  {" "}
                  {/* begin person containers*/}
                  <div style={personContainerStyle}>
                    {" "}
                    {/* Container for each person - Daniel King*/}
                    <div style={{ marginBottom: "10px" }}>
                      {" "}
                      {/* photo container */}
                      <img
                        src={kingImage}
                        alt="Person"
                        width="100"
                        height="100"
                      />
                    </div>
                    <div>
                      {" "}
                      {/* name and bio container */}
                      <p>Daniel King</p>
                      <p>
                        Bio: Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Sed eget risus porta, tincidunt turpis vel,
                        aliquet justo.
                      </p>
                    </div>
                  </div>
                  <div style={personContainerStyle}>
                    {" "}
                    {/* Container for each person - Brian Ortiz*/}
                    <div style={{ marginBottom: "10px" }}>
                      {" "}
                      {/* photo container */}
                      <img
                        src={ortizImage}
                        alt="Person"
                        width="100"
                        height="100"
                      />
                    </div>
                    <div>
                      {" "}
                      {/* name and bio container */}
                      <p>Brian Ortiz</p>
                      <p>
                        Bio: Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Sed eget risus porta, tincidunt turpis vel,
                        aliquet justo.
                      </p>
                    </div>
                  </div>
                  <div style={personContainerStyle}>
                    {" "}
                    {/* Container for each person - Daniel Soto*/}
                    <div style={{ marginBottom: "10px" }}>
                      {" "}
                      {/* photo container */}
                      <img
                        src={sotoImage}
                        alt="Person"
                        width="100"
                        height="100"
                      />
                    </div>
                    <div>
                      {" "}
                      {/* name and bio container */}
                      <p>Daniel Soto</p>
                      <p>
                        Bio: Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Sed eget risus porta, tincidunt turpis vel,
                        aliquet justo.
                      </p>
                    </div>
                  </div>
                  <div style={personContainerStyle}>
                    {" "}
                    {/* Container for each person - Arlen Jackson*/}
                    <div style={{ marginBottom: "10px" }}>
                      {" "}
                      {/* photo container */}
                      <img
                        src={jacksonImage}
                        alt="Person"
                        width="100"
                        height="100"
                      />
                    </div>
                    <div>
                      {" "}
                      {/* name and bio container */}
                      <p>Arlen Jackson</p>
                      <p>
                        Bio: Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Sed eget risus porta, tincidunt turpis vel,
                        aliquet justo.
                      </p>
                    </div>
                  </div>
                  <div style={personContainerStyle}>
                    {" "}
                    {/* Container for each person - Kyle Rogers*/}
                    <div style={{ marginBottom: "10px" }}>
                      {" "}
                      {/* photo container */}
                      <img
                        src={rogersImage}
                        alt="Person"
                        width="100"
                        height="100"
                      />
                    </div>
                    <div>
                      {" "}
                      {/* name and bio container */}
                      <p>Kyle Rogers</p>
                      <p>
                        Bio: Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Sed eget risus porta, tincidunt turpis vel,
                        aliquet justo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Us */}
          <div style={aboutContainerStyle}>
            <div style={contactSubsectionContainerStyle}>
              <h2 style={{ fontSize: "18px" }}>Jac Enterprises</h2>
              <div style={{ flex: "display" }}>
                <p>
                  "Jac Enterprises, a pioneer in unique educational adventures
                  exploring Earth's ecosystems, is excited to present to your
                  our new captivating Mystery Educator application. Catering to
                  ages 6 to 13, it engages children in science, art, and history
                  through captivating applications and an immersive,
                  ever-evolving learning experience."
                </p>
                <body
                  style={{
                    ...{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    },
                  }}
                >
                  <body>123 Adventure Way, EcoVille, Earth </body>
                  <body>Phone: +1 (800) JAC-ADVS</body>
                  <body>
                    Email:{" "}
                    <a href="mailto:info@jacenterprises.com">
                      info@jacenterprises.com
                    </a>
                  </body>
                  <body>Social Media: @JacAdventures</body>
                  <body>
                    Website:{" "}
                    <a href="www.jacenterprises.com">www.jacenterprises.com</a>
                  </body>
                </body>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
