import React from "react";

const Home = () => {
  return (
    <>
      <header>
        {/* <img
          className="header_img"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Premier_League_Logo.svg/1920px-Premier_League_Logo.svg.png"
          alt="Premier League Logo"
        />{" "} */}
        <h1 className="header_title">Premier League </h1>
        <p className="header_info">
          This website is for Premier League 20/21 fans. Here You can check
          Teams and Players basis statistics. Enjoy!{" "}
        </p>
      </header>
      <section className="home"></section>
    </>
  );
};

export default Home;
