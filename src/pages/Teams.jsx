import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import uuid from "react-uuid";
import TeamInfo from "../components/TeamInfo";

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [teamInfoActive, setTeamInfoActive] = useState(false);
  const [teamID, setTeamID] = useState(1);

  const getTeams = async () => {
    const url = "http://api.football-data.org/v2/competitions/2021/teams";
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

  const openTeamInfo = (id) => {
    setTeamInfoActive(true);
    setTeamID(id);
  };

  useEffect(() => {
    getTeams()
      .then((data) => setTeams(data))
      .catch((error) => console.log("error!"));
  }, []);

  return (
    <>
      <section className="teams">
        {teams?.teams?.map((team) => {
          const { crestUrl, id, name } = team;
          return (
            <div className="teams_team" key={uuid()}>
              <div className="team_img">
                <img src={crestUrl} alt="team logo" />
              </div>
              <p className="team_name">{name}</p>
              <div className="team_info_overlay">
                <button
                  type="button"
                  className="team_button"
                  onClick={() => openTeamInfo(id)}
                >
                  Find out more
                </button>
              </div>
            </div>
          );
        })}
        {teamInfoActive && (
          <TeamInfo setTeamInfoActive={setTeamInfoActive} teamID={teamID} />
        )}
      </section>
    </>
  );
};

export default Teams;
