import { View, Text, ActivityIndicator, FlatList } from 'react-native'
import React from 'react'
import ScreenLayout from '../../components/ScreenLayout'
import useGetJobs from '../../../data/API/hooks/jobs/useGetJobs';
import JobCard from '../../components/JobCard';

const JobsScreen = () => {
  const { jobs, loading, fetchJobs, limit, total } = useGetJobs()

  const handleLoadMore = () => {
    if (jobs.length < total && !loading) {
      fetchJobs(limit + 3)
    }
  }

  return (
    <ScreenLayout>
        <FlatList
          data={jobs}
          keyExtractor={(item) => item.external_id}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          renderItem={({ item }) => (
            <JobCard
              company={item.company}
              position={item.title}
              description={item.description}
              location={item.location}
              salary={item.salary}
              createdAt={item.created_at}
              onPress={() => console.log(`View Job: ${item.id}`)}
            />
          )}
          showsVerticalScrollIndicator={false}
        />

        {loading && <ActivityIndicator size={'large'} color={'#fff'} />}
    </ScreenLayout>
  )
}

export default JobsScreen