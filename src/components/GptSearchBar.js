import React from "react";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import { useSelector } from "react-redux";
import openai from "../utils/openAi";
import { API_OPTIONS } from "../utils/constants";

const GptSearchBar = () => {
  const searchText = useRef(null);

  const langKey = useSelector((store) => store.config.lang);
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };
  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    // we will call api to openai
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query: " +
      searchText.current.value +
      "only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Jawan,Don,Phattan,Dunki,Golmaal";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResults.choices?.[0]?.message?.content);
    // "Kabir Singh, Dangal, PK, Zindagi Na Milegi Dobara, Queen"
    const getMovies = gptResults.choices?.[0]?.message?.content.split(",");
    // ["movie1",'movie2']

    const data = getMovies.map((movie) => searchMovieTMDB(movie));
  };
  // if (!gptResults.choices) {
  //   // TODO Write Error handling
  // }
  return (
    <div className="pt-[10%] flex justify-center ">
      <form
        className="w-1/2 bg-black grid grid-cols-12 "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="p-4 m-4 col-span-9  "
          placeholder={lang[langKey].gptSearchPlaceholder}
          ref={searchText}
        />
        <button
          className="py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-4 "
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
