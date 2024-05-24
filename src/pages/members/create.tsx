import AddMemberForm from "@/components/Forms/AddMemberForm";
import { getTeams } from "@/lib/api";
import { Team } from "@/types";

interface CreateMemberPageProps {
  teams: Team[];
}

const CreateMemberPage = ({ teams }: CreateMemberPageProps) => {
  return <AddMemberForm teams={teams} />;
};

export const getServerSideProps = async () => {
  const response = await getTeams();
  const teams = response.data.teams;

  return {
    props: {
      teams,
    },
  };
};

export default CreateMemberPage;