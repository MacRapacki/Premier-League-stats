import React, { useEffect, useState } from "react";
import uuid from "react-uuid";

const Teams = () => {
  const [standings, setStandings] = useState({});

  const getStandings = async () => {
    const url = "http://api.football-data.org//v2/competitions/2021/standings";
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
    getStandings()
      .then((data) => setStandings(data))
      .catch((error) => console.log("error"));
  }, []);
  console.log(standings);
  return (
    <>
      <div className="container">
        <h1> {` ${standings.competition?.name} table:`}</h1>
        {standings &&
          standings.standings?.map((item) => {
            return (
              <div key={uuid()} className="table">
                {/* <div className="team">
                  <div className="position"> #</div>
                  <div className="team_name"> Name</div>
                  <div className="played_games"> Games</div>
                  <div className="won_games"> W</div>
                  <div className="draw_games">D</div>
                  <div className="lost_games"> L</div>
                </div> */}
                {item.type === "TOTAL" &&
                  item.table?.map((teamData) => {
                    const {
                      position,
                      team,
                      playedGames,
                      draw,
                      lost,
                      won,
                      goalsAgainst,
                      goalsFor,
                      points,
                      form,
                    } = teamData;
                    return (
                      <div className="team" key={uuid()}>
                        <div className="position"> {position}</div>
                        <div className="team_name"> {team.name}</div>
                        <div className="played_games"> {playedGames}</div>
                        <div className="won_games"> {won}</div>
                        <div className="draw_games"> {draw}</div>
                        <div className="lost_games"> {lost}</div>
                        <div className="goals">
                          {`${goalsFor}:${goalsAgainst}`}
                        </div>
                        <div className="points"> {points}</div>
                        <div className="form"> {form}</div>
                      </div>
                    );
                  })}
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Teams;
