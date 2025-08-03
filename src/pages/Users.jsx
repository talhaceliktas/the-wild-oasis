import Heading from "../ui/Heading";
import SignupForm from "../features/authentication/SignupForm";
import { useUser } from "../features/authentication/useUser";
import UserList from "../features/authentication/UserList";

function NewUsers() {
  const { user } = useUser();
  const isAdmin = user?.user_metadata?.role === "admin";

  return (
    <>
      <Heading as="h1">Create a new user</Heading>
      <SignupForm />
      {isAdmin && <UserList />}
    </>
  );
}

export default NewUsers;
