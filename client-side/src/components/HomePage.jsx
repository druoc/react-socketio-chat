import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [user, setUser] = useState("");
  const navigation = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("user", user);
    navigation("/chat");
  };

  return (
    <form className="home" onSubmit={handleSubmit}>
      <h3 className="home-header">
        Please choose a username to access the chat
      </h3>
      <h4 className="sub-header">Also, please be nice to each other!</h4>
      <input
        type="text"
        minLength={4}
        maxLength={15}
        name="username"
        id="username"
        className="username-input"
        value={user}
        onChange={(event) => setUser(event.target.value)}
      />
      <button className="sign-in-button">Lets go!</button>
    </form>
  );
};

export default HomePage;
