import React, { useEffect, useState } from "react";
import uuid from "react-uuid";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

const TeamInfo = ({ teamID, setTeamInfoActive, match }) => {
  const [teamData, setTeamData] = useState([]);

  console.log(match);

  const getTeamData = async () => {
    const url = `http://api.football-data.org/v2/teams/${match.params.id}`;
    const options = {
      type: "GET",
      headers: { "X-Auth-Token": `${process.env.REACT_APP_API_KEY}` },
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

  return (
    <div className="team_overlay">
      <h1>{match.params.id}</h1>
      <div className="team_info">
        <Link type="button" className="team_info_closeBtn" to="/teams">
          X
        </Link>
        <div className="team_crest">
          <img src={teamData.crestUrl} alt="Team Crest" />
          <p className="team_name">{teamData.name}</p>
        </div>
        <div className="team_members">
          <h2>Squad:</h2>
          {teamData?.squad?.length ? (
            <>
              {" "}
              <div className="team_goalkeepers">
                <h3>Goalkeepers:</h3>
                {teamData.squad?.map((person) => {
                  return (
                    person.position === "Goalkeeper" && (
                      <p key={uuid()} className="player_name">
                        {person.name}
                      </p>
                    )
                  );
                })}
              </div>
              <div className="team_defenders">
                <h3>Defenders:</h3>
                {teamData.squad?.map((person) => {
                  return (
                    person.position === "Defender" && (
                      <p key={uuid()} className="player_name">
                        {person.name}
                      </p>
                    )
                  );
                })}
              </div>
              <div className="team_midfielders">
                <h3>Midfielders:</h3>
                {teamData.squad?.map((person) => {
                  return (
                    person.position === "Midfielder" && (
                      <p key={uuid()} className="player_name">
                        {person.name}
                      </p>
                    )
                  );
                })}
              </div>
              <div className="team_attackers">
                <h3>Attakers:</h3>
                {teamData.squad?.map((person) => {
                  return (
                    person.position === "Attacker" && (
                      <p key={uuid()} className="player_name">
                        {person.name}
                      </p>
                    )
                  );
                })}
              </div>
            </>
          ) : (
            "Squads will be update at the beginning of the season :)"
          )}
        </div>
      </div>
    </div>
  );
};

export default withRouter(TeamInfo);
