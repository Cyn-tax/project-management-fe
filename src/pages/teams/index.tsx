import ListTeams from "@/components/Lists/ListTeams";
import { getTeams } from "@/lib/api";
import { Team } from "@/types";
import { useState, useEffect } from "react";

const Viewteams = () => {

    const [teams, setTeams] = useState<Team[]>([]);

    useEffect(() => {
      getTeams().then(response => {
        setTeams(response.data.teams);
      });
    }, []);
    
  return (
    <div className="container">
      <ListTeams teams={teams}/>
    </div>
  );
};
export default Viewteams;
