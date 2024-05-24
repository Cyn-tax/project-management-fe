import ListProjects from "@/components/Lists/ListProjects";
import { getProjects } from "@/lib/api";
import { Project } from "@/types";
import { useState, useEffect } from "react";

const Viewprojects = () => {

    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
      getProjects().then(response => {
        setProjects(response.data.projects);
      });
    }, []);
    
  return (
    <div className="container">
      <ListProjects projects={projects}/>
    </div>
  );
};
export default Viewprojects;
