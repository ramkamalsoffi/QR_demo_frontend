import apiClient from '../api-client';
import { SubmissionRequest, SubmissionResponse } from '../types';

export const submissionApi = {
  submit: async (data: SubmissionRequest): Promise<SubmissionResponse> => {
    const response = await apiClient.post<SubmissionResponse>('/api/submission', data);
    return response.data;
  },
};

