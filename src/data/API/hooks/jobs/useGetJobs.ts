import React, { useCallback, useEffect, useState } from 'react'
import getJobs from '../../service/jobs/getJobs'
import { Job } from '../../../../types/job.type'

const useGetJobs = (initialLimit = 3) => {
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const [limit, setLimit] = useState(initialLimit)
  const [total, setTotal] = useState(0)

  const fetchJobs = useCallback(
    async (limitToFetch = limit) => {
      setLoading(true)
      try {
        const response = await getJobs(1, limitToFetch) // always page=1
        if (response) {
          const { jobs: jobsData, total, limit } = response
          console.log(response, 'response')
          setJobs(jobsData)
          setTotal(total)
          setLimit(limit || initialLimit)
        }
      } catch (err: any) {
        console.error(err)
        setError(err)
      } finally {
        setLoading(false)
      }
    },
    [limit, initialLimit]
  )

  useEffect(() => {
    fetchJobs(initialLimit)
  }, [])

  return { jobs, error, loading, limit, total, fetchJobs }
}

export default useGetJobs