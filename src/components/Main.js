import React from "react";
import ReactDOM from "react-dom";
import Slider from "./Slider";
import Header from "./Header";
import Firstleft from "./Firstleft";
import { Home } from "./Home";
import ReactPageScroller from "react-page-scroller";
import { Gnghouse } from "./Gnghouse";
import { SectionsContainer, Section } from "react-fullpage";
import { Production } from "./Production";
import { Gnghouse2 } from "./Gnghouse2";
import "./Main.css";

export const Main = () => {
  const { headingText } = styles;

  let options = {
    scrollBar: false,
    navigation: false,
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
          <Gnghouse2 />
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
