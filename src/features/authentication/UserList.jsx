import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import UserRow from "./UserRow";
import { useUsers } from "./useUsers";

const UserList = () => {
  const { users, isPending } = useUsers();

  if (isPending) return <Spinner />;

  if (users.length < 1) return <p>No users data.</p>;

  console.log(users);
  return (
    <Table columns="0.3fr 1.0fr 2.2fr 1fr 1fr">
      <Table.Header>
        <div></div>
        <div>Avatar</div>
        <div>Full Name</div>
        <div>Email</div>
        <div></div>
      </Table.Header>
      <Table.Body
        data={users}
        render={(user) => <UserRow user={user} />}
      ></Table.Body>
    </Table>
  );
};

export default UserList;
