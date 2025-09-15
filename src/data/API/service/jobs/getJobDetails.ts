import React from 'react'
import apiClient from '../../axios-instance'
import { Job } from '../../../../types/job.type'

const getJobDetails = async (jobId: string) => {
  try {
    const endpoint = `/jobs/${jobId}`
    const response = await apiClient.get<Job>(endpoint)
    return response
  } catch (error) {
    console.error(error)
    throw error
  }
}

export default getJobDetails