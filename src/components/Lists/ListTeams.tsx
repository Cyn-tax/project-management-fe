import { Team } from "@/types";

const ListTeams = ({ teams }: { teams: Team[] }) => {
  return (
    <ul className="list-group">
      {teams.map((team) => (
        <li key={team.id} className="list-group-item">{team.name}</li>
      ))}
    </ul>
  );
};

export default ListTeams;
