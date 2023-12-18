import React from "react";
import GptSearchBar from "./GptSearchBar";

import { BACKGROUND_IMAGE } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10 ">
        <img src={BACKGROUND_IMAGE} alt="Netflix background" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
