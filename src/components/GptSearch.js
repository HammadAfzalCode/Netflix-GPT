import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggesions from "./GptMovieSuggesions";
import { BACKGROUND_IMAGE } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10 ">
        <img src={BACKGROUND_IMAGE} alt="Netflix background" />
      </div>
      <GptSearchBar />
      <GptMovieSuggesions />
    </div>
  );
};

export default GptSearch;