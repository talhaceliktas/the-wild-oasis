import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser as deleteUserApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useDeleteUser() {
  const queryClient = useQueryClient();

  const { mutate: deleteUser, isPending: isDeleting } = useMutation({
    mutationFn: (userId) => deleteUserApi(userId),
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
      toast.success("User successfully deleted!");
    },
    onError: (err) => {
      console.log("error", err);
      toast.error("An error occurred while deleting the user");
    },
  });

  return { deleteUser, isDeleting };
}
