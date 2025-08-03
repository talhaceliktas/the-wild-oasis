import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../../services/apiAuth";

export function useUsers() {
  const { data: users, isPending } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });

  return { users, isPending };
}
