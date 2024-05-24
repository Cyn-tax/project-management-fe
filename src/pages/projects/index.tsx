import ListProjects from "@/components/Lists/ListProjects";
import { getProjects } from "@/lib/api";
import { Project } from "@/types";

const Viewprojects = ({ projects }: { projects: Project[] }) => {
  return (
    <div className="container">
      <ListProjects projects={projects}/>
    </div>
  );
};

export default Viewprojects;

export const getServerSideProps = async () => {
  const response = await getProjects();
  const projects = response.data.projects;

  return {
    props: {
      projects,
    },
  };
};