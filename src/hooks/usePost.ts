import { QueryClient, useMutation } from "@tanstack/react-query";
import api from "@/utilities/axios";
import { AuthUserProps, NewUserProps } from "@/interfaces/user.props";

const queryClient = new QueryClient();

export const usePostUser = (url: string) => {
  const createNewUser = useMutation({
    mutationFn: async (values: Object) => {
      const response = await api.post(url, { ...values });
      return response.data.user as NewUserProps;
    },
    onSettled: async (data, error) => {
      if (!error) {
        console.log(data);
        await queryClient.invalidateQueries({ queryKey: ["user", data?.userId] });
      }
    },
  });

  return { createNewUser };
};

export const usePostAuthUser = (url: string) => {
  const authUser = useMutation({
    mutationFn: async (values: Object) => {
      const response = await api.post(url, { ...values });
      return response.data as AuthUserProps;
    },
    onSettled: async (data, error) => {
      if (!error) {
        console.log(data);
        await queryClient.invalidateQueries({ queryKey: ["user", data?.user.userId] });
      }
    },
  });

  return { authUser };
};
