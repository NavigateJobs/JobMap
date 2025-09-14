import { Job } from '../../../../types/job.type';
import apiClient from '../../axios-instance';

interface JobResponse {
    jobs: Job[],
    page: number,
    limit?: number,
    total: number
}

const getJobs = async (page =1, limit = 3) => {
    try {
        const endpoint = `/jobs`
        const response = await apiClient.get<JobResponse>(endpoint, {
            params: {
                limit,
                page
            }
        });
        return response.data
    } catch (error) {
        console.error('Job fetch error:', error);
        throw error; 
    }
}

export default getJobs