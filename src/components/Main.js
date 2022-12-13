import React from "react";
import ReactDOM from "react-dom";
import Slider from "./Slider";
import Header from "./Header";
import Firstleft from "./Firstleft";
import { Home } from "./Home";
import { SectionsContainer, Section } from "react-fullpage";
import { Gnghouse } from "./Gnghouse";
import { Production } from "./Production";
import "./Main.css";

export const Main = () => {
  const { headingText } = styles;

  let options = {
    anchors: ["sectionOne", "sectionTwo", "sectionThree", "sectionFour"],
  };

  return (
    <>
      <Header />
      <SectionsContainer {...options}>
        <Section>
          <Home />
        </Section>
        <Section>
          <Slider />
        </Section>
        <Section>
          <Gnghouse />
        </Section>
        <Section>
          <Production />
        </Section>
      </SectionsContainer>
    </>
  );
};

const styles = {
  headingText: {
    fontSize: 50,
    fontWeight: 300,
  },
};
