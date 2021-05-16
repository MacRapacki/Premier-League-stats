import React, { useEffect, useState } from "react";

const TeamInfo = ({ teamID, setTeamInfoActive }) => {
  const [teamData, setTeamData] = useState([]);

  const getTeamData = async () => {
    const url = `http://api.football-data.org/v2/teams/${teamID}`;
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
    getTeamData()
      .then((data) => setTeamData(data))
      .catch((error) => console.log("error!"));
  }, []);

  console.log(teamData);

  return (
    <div className="team_overlay">
      <div className="team_info">
        <button
          type="button"
          className="team_info_closeBtn"
          onClick={() => setTeamInfoActive(false)}
        >
          X
        </button>
        <div className="team_crest">
          <img src={teamData.crestUrl} alt="Team Crest" />
          <p className="team_name">{teamData.name}</p>
        </div>
        <div className="team_members">
          <h2>Squad:</h2>
          <div className="team_goalkeepers">
            <h3>Goalkeepers:</h3>
            {teamData.squad?.map((person) => {
              return (
                person.position === "Goalkeeper" && (
                  <p className="player_name">{person.name}</p>
                )
              );
            })}
          </div>
          <div className="team_defenders">
            <h3>Defenders:</h3>
            {teamData.squad?.map((person) => {
              return (
                person.position === "Defender" && (
                  <p className="player_name">{person.name}</p>
                )
              );
            })}
          </div>
          <div className="team_midfielders">
            <h3>Midfielders:</h3>
            {teamData.squad?.map((person) => {
              return (
                person.position === "Midfielder" && (
                  <p className="player_name">{person.name}</p>
                )
              );
            })}
          </div>
          <div className="team_attackers">
            <h3>Attakers:</h3>
            {teamData.squad?.map((person) => {
              return (
                person.position === "Attacker" && (
                  <p className="player_name">{person.name}</p>
                )
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamInfo;
