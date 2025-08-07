import { useMutation } from "@tanstack/react-query";
import { createGuest as createUserApi } from "../../services/apiGuest";
import toast from "react-hot-toast";

export function useCreateUser() {
  const { mutate: createUser, isPending } = useMutation({
    mutationKey: ["createdUser"],
    mutationFn: (userData) => createUserApi(userData),
    onError: () => toast.error("User could not be created"),
    onSuccess: () => toast.success("User successfully created"),
  });

  return { createUser, isPending };
}
