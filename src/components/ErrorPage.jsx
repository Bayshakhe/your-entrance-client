import React from "react";
import errorAnimation from "../../public/error.json";
import { Player } from "@lottiefiles/react-lottie-player";

const ErrorPage = () => {
  return (
    <Player
      autoplay
      loop
      src={errorAnimation}
      style={{ height: "400px", width: "400px" }}
    ></Player>
  );
};

export default ErrorPage;
