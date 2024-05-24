import { Member } from "@/types";

const ListMembers = ({ members }: { members: Member[] }) => {
  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
      <h1>All Members</h1>
      <div
        hidden={members.length !== 0}
        className="alert alert-info"
        role="alert"
      >
        No members found
      </div>
      <ul className="list-group">
        {members.map((member) => (
          <li key={member.id} className="list-group-item">
            {member.first_name} {member.last_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListMembers;
