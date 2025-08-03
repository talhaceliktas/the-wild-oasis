import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

export function useUser() {
  const {
    isPending,
    data: user,
    fetchStatus,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return {
    user,
    isPending,
    isAuthenticated: user?.role === "authenticated",
    fetchStatus,
  };
}
