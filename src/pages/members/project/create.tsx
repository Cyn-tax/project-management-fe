import AddMemberProjectForm from "@/components/Forms/AddMemberProjectForm";
import { getMembers, getProjects } from "@/lib/api";
import { Member, Project } from "@/types";

const CreateMemberProject = ({ members, projects }: { members: Member[], projects: Project[] }) => {
  return (
    <AddMemberProjectForm members={members} projects={projects} />
  );
};

export default CreateMemberProject;

export const getServerSideProps = async () => {
  const [membersResponse, projectsResponse] = await Promise.all([getMembers(), getProjects()]);
  const members = membersResponse.data.members;
  const projects = projectsResponse.data.projects;

  return {
    props: {
      members,
      projects,
    },
  };
};