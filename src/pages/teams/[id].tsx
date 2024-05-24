import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Member } from "@/types";
import { getTeamMembers } from "@/lib/api";
import ListTeamMembers from "@/components/Lists/ListTeamMembers";

const TeamMembers = () => {
  const params = useParams<{ id: string }>();
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    if (params && params.id) {
      getTeamMembers(params.id).then((response: any) => {
        setMembers(response.data.members);
      });
    }
  }, [params]);

  return (
    <ListTeamMembers members={members}/>
  );
};

export default TeamMembers;
