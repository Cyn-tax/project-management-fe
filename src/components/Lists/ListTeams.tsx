import { Team } from "@/types";
import Link from "next/link";

const ListTeams = ({ teams }: { teams: Team[] }) => {
  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
      <h2>List of Teams</h2>
      <ul className="list-group">
        {teams.map((team, index) => (
          <li key={team.id} className="list-group-item list-group-item-action">
            <Link className="nav-link" href={`/teams/${team.id}`}>
              {index + 1} | {team.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListTeams;
