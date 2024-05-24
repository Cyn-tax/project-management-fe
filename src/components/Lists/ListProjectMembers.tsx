import { Member } from "@/types";

const ListProjectMembers = ({ members }: { members: Member[] }) => {
  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
      <h1>Project Members</h1>
      <div
        hidden={members.length !== 0}
        className="alert alert-info"
        role="alert"
      >
        No members assigned to this project
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

export default ListProjectMembers;
