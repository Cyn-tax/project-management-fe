import React from "react";
import { Member } from "@/types";
import { getMembers } from "@/lib/api";
import ListMembers from "@/components/Lists/ListMembers";

const Members = ({ members }: { members: Member[] }) => {
  return (
    <ListMembers members={members}/>
  );
};

export default Members;

export const getServerSideProps = async () => {
  const response = await getMembers();
  const members = response.data.members;

  return {
    props: {
      members,
    },
  };
};