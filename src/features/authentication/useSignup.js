import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const queryClient = useQueryClient();

  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ stale: true });
      toast.success(
        "Account successfully created! Please verify the new account from the user's email adress."
      );
    },
  });

  return { signup, isPending };
}
