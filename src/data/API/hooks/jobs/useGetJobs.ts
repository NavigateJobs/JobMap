import React, { useCallback, useEffect, useState } from 'react'
import getJobs from '../../service/jobs/getJobs'
import { Job } from '../../../../types/job.type'


const useGetJobs = (initialLimit = 5) => {
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const [limit] = useState(initialLimit) // limit is fixed per request
  const [offset, setOffset] = useState(0)
  const [total, setTotal] = useState(0)
  const [search, setSearch] = useState('')
  const fetchJobs = useCallback(
    async (newOffset = 0, append = false, customSearch?: string) => {
      setLoading(true)
      try {
        const activeSearch = customSearch ?? search
        const response = await getJobs(limit, newOffset, activeSearch)
        if (response) {
          const { jobs: jobsData, total } = response

          console.log(response, 'response')
          setJobs(prev =>
            append ? [...prev, ...jobsData] : jobsData
          )
          setTotal(total)
          setOffset(newOffset)
        }
      } catch (err: any) {
        console.error(err)
        setError(err)
      } finally {
        setLoading(false)
      }
    },
    [limit, ]
  )

  // Initial fetch
  useEffect(() => {
    fetchJobs(0, false, search)
  }, [fetchJobs, search])

  // Public API
  const loadMore = () => {
    if(jobs.length === 0 ) return
    if (jobs.length < total && !loading) {
      fetchJobs(offset + limit, true, search) // 👈 next chunk
    }
  }

  const refetch = (newSearch: string) => {
    if(newSearch === '') setJobs([])
    setSearch(newSearch)
    fetchJobs(0, false, newSearch)
  }

  return { jobs, error, loading, total, loadMore, refetch }
}

export default useGetJobs