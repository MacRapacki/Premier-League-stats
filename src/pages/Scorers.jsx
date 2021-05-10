import { useEffect, useState } from "react";

import uuid from "react-uuid";

const Scorers = () => {
  const [scorers, setScorers] = useState([]);

  const getScorers = async () => {
    const url = "http://api.football-data.org//v2/competitions/2021/scorers";
    const options = {
      type: "GET",
      headers: { "X-Auth-Token": "3fccf6a31f3e4b9fa28393d33f768c10" },
      dataType: "json",
    };
    const resp = await fetch(url, options);
    if (!resp.ok) {
      const message = `status is: ${resp.status}`;
      throw new Error(message);
    }
    const data = await resp.json();
    return data;
  };
  useEffect(() => {
    getScorers()
      .then((data) => setScorers(data))
      .catch((error) => console.log("error"));
  }, []);
  return (
    <>
      <section className="scorers">
        <h2>Best 10 Premier League goal scorers:</h2>
        <div className="scorers_wrapper">
          <div className="player">
            <div className="player_goals">Goals</div>
            <div className="player_name">Name</div>
            <div className="player_team">Team</div>
          </div>
          {scorers.scorers?.map((person) => {
            const { player } = person;
            return (
              <div className="player" key={uuid()}>
                <div className="player_goals">{person.numberOfGoals}</div>
                <div className="player_name">{player.name}</div>
                <div className="player_team">{person.team.name}</div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Scorers;
