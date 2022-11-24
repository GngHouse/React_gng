import React from "react";
import ReactDOM from "react-dom";
import Slider from "./Slider";
import Header from "./Header";
import Firstleft from "./Firstleft";

export const Main = () => {
  const { headingText } = styles;

  return (
    <>
      <Header />
      <Slider />
    </>
  );
};

const styles = {
  headingText: {
    fontSize: 50,
    fontWeight: 300,
  },
};
