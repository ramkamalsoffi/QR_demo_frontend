import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "@/lib/axios";
import { ApiResponse } from "@/types";

export function useApi<T>(endpoint: string, options?: { enabled?: boolean }) {
  return useQuery<ApiResponse<T>>({
    queryKey: [endpoint],
    queryFn: async () => {
      const { data } = await apiClient.get(endpoint);
      return data;
    },
    enabled: options?.enabled ?? true,
  });
}

export function useApiMutation<T, V = any>(endpoint: string) {
  const queryClient = useQueryClient();

  return useMutation<ApiResponse<T>, Error, V>({
    mutationFn: async (variables) => {
      const { data } = await apiClient.post(endpoint, variables);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [endpoint] });
    },
  });
}

