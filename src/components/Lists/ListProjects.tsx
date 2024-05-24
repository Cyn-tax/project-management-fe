import { Project } from "@/types";
import Link from "next/link";

const ListProjects = ({ projects }: { projects: Project[] }) => {
  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
      <h2>List of Projects</h2>
      <ul className="list-group">
        {projects.map((project, index) => (
          <li key={project.id} className="list-group-item list-group-item-action">
            <Link className="nav-link" href={`/projects/${project.id}`}>
              {index + 1} | {project.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListProjects;
