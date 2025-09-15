import React, { useCallback, useEffect, useState } from 'react'
import getJobDetails from '../../service/jobs/getJobDetails'
import { Job } from '../../../../types/job.type'

const useGetJobDetails = (jobId: string) => {
    const [job, setJob] = useState<Job>()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchJobDetails = useCallback(async() => {
        if (!jobId) return
        setLoading(true)
        try {
            const response = await getJobDetails(jobId)
            console.log(response)
            if(response){
                setJob(response.data)
            }
        } catch (error: any) {
            console.error(error)
            setError(error)
        }finally{
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        fetchJobDetails()
    }, [fetchJobDetails])

    return {
        loading,
        error,
        job
    }
}

export default useGetJobDetails