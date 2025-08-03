import styled from "styled-components";
import Table from "../../ui/Table";
import { HiTrash } from "react-icons/hi2";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useDeleteUser } from "./useDeleteUser";

const Img = styled.img`
  display: block;
  width: 6.4rem;
  object-fit: cover;
  object-position: center;
`;

const UserRow = ({ user }) => {
  const { id, avatar, full_name: fullName, email } = user;

  const { deleteUser, isDeleting } = useDeleteUser();

  return (
    <Table.Row>
      <Modal>
        <div></div>
        <Img src={avatar ? avatar : "default-user.jpg"} />
        <div>{fullName}</div>
        <div>{email}</div>
        <Modal.Open opens="delete">
          <Button>
            <HiTrash />
          </Button>
        </Modal.Open>
        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="user"
            disabled={isDeleting}
            onConfirm={() => deleteUser(id)}
          />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
};

export default UserRow;
