import CreateUserForm from "../features/create-guest/CreateGuestForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

const CreateGuest = () => {
  return (
    <Row>
      <Heading as="h1">Create a Guest</Heading>
      <CreateUserForm />
    </Row>
  );
};

export default CreateGuest;
