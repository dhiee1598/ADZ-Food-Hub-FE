import { useQuery } from "@tanstack/react-query";
import api from "@/utilities/axios";
import { UserProps } from "@/interfaces/user.props";

export const useAuth = () => {
  const GetAuthorizeUser = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await api.get("/api/users");

      return response.data as UserProps;
    },
    retry: false,
  });

  return { GetAuthorizeUser };
};
