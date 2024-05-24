import AddMemberForm from "@/components/Forms/AddMemberForm";
import { getTeams } from "@/lib/api";
import { Team } from "@/types";
import { useState, useEffect } from "react";

const CreateTeamPage = () =>{

    const [teams, setTeams] = useState<Team[]>([]);

    useEffect(() => {
        getTeams().then(response => {
          setTeams(response.data.teams);
        });
      }, []);

    
    return(
        <AddMemberForm teams={teams}/>
    )
}
export default CreateTeamPage;