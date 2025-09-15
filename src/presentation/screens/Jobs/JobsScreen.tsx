import { View, Text, ActivityIndicator, FlatList } from 'react-native'
import React from 'react'
import ScreenLayout from '../../components/ScreenLayout'
import useGetJobs from '../../../data/API/hooks/jobs/useGetJobs';
import JobCard from '../../components/JobCard';
import { formatDate } from '../../utils/formatDate';
import { useNavigation } from '@react-navigation/native';
import { UseNavigationType } from '../../navigation/types';

const JobsScreen = () => {
  const { jobs, loading, loadMore } = useGetJobs()
  const navigation = useNavigation<UseNavigationType>()

  const handleRedirectToJob = (jobId: string) => {
    navigation.navigate("JobDetailsScreen", {jobId})
  }

  return (
    <ScreenLayout insets={['top','left','right']}>
      <View className='flex-1 px-3'>
        <FlatList
          data={jobs}
          keyExtractor={(item) => item.external_id}
          onEndReached={loadMore}
          onEndReachedThreshold={0.5}
          renderItem={({ item }) => (
            <JobCard
              company={item.company}
              position={item.title}
              description={item.description}
              location={item.location}
              salary={item.salary}
              createdAt={formatDate(item.created_at)}
              onPress={() => handleRedirectToJob(item.id.toString())}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={
            loading ? <ActivityIndicator size="large" color="#fff" /> : null
          }
        />
      </View>
    </ScreenLayout>
  )
}

export default JobsScreen