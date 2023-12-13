import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/b66b6043-3052-483b-8a07-9d1ebc71c70d/PK-en-20231204-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="Netflix background"
        />
      </div>
      <form className="w-4/12 absolute p-12 bg-black bg-opacity-80  my-36 mx-auto right-0 left-0 text-white rounded-lg ">
        <h1 className="font-medium text-3xl py-4 ">
          {isSignInForm ? "Sign In" : "Sign up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700 text-gray-300"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 text-gray-300"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 text-gray-300"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign up"}
        </button>
        <p
          className="p-4 font-medium cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignInForm ? (
            <span className="text-[#737373] ">New to Netflix? </span>
          ) : (
            <span className="text-[#737373] ">Already registered? </span>
          )}
          Sign {isSignInForm ? "Up Now" : "In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
