import ListTeams from "@/components/Lists/ListTeams";
import { getTeams } from "@/lib/api";
import { Team } from "@/types";

const ViewTeams = ({ teams }: { teams: Team[] }) => {
  return (
    <div className="container">
      <ListTeams teams={teams}/>
    </div>
  );
};

export default ViewTeams;

export const getServerSideProps = async () => {
  const response = await getTeams();
  const teams = response.data.teams;

  return {
    props: {
      teams,
    },
  };
};