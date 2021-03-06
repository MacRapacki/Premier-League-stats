import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import uuid from "react-uuid";

const TeamInfo = React.lazy(() => import("../components/TeamInfo"));

const Teams = () => {
  const [teams, setTeams] = useState([]);

  const getTeams = async () => {
    const url = "http://api.football-data.org/v2/competitions/2021/teams";
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
    getTeams()
      .then((data) => setTeams(data))
      .catch((error) => console.log("error!"));
  }, []);

  return (
    <>
      <section className="teams">
        <>
          {teams?.teams?.map((team) => {
            const { crestUrl, id, name } = team;
            return (
              <div className="teams_team" key={uuid()}>
                <div className="team_img">
                  <img src={crestUrl} alt="team logo" />
                </div>
                <p className="team_name">{name}</p>
                <div className="team_info_overlay">
                  <Link
                    className="team_button"
                    to={`/teams/${id}`}
                    style={{ color: "red" }}
                  >
                    Find out more
                  </Link>
                </div>
              </div>
            );
          })}
        </>
      </section>
    </>
  );
};

export default Teams;
