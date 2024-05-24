import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Member } from "@/types";
import { getProjectMembers } from "@/lib/api";
import ListProjectMembers from "@/components/Lists/ListProjectMembers";

const ProjectMembers = () => {
  const params = useParams<{ id: string }>();
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    if (params && params.id) {
      getProjectMembers(params.id).then((response: any) => {
        setMembers(response.data.members);
      });
    }
  }, [params]);

  return (
    <ListProjectMembers members={members}/>
  );
};

export default ProjectMembers;
