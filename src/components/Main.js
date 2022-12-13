import React from "react";
import ReactDOM from "react-dom";
import Slider from "./Slider";
import Header from "./Header";
import Firstleft from "./Firstleft";
import { Home } from "./Home";
import ReactPageScroller from "react-page-scroller";

export const Main = () => {
  const { headingText } = styles;

  return (
    <>
      <Header />
      <ReactPageScroller>
      <Home />
      <Slider />
      </ReactPageScroller>
    </>
  );
};

const styles = {
  headingText: {
    fontSize: 50,
    fontWeight: 300,
  },
};
