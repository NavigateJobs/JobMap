import { View, Text, ActivityIndicator, FlatList } from 'react-native'
import React from 'react'
import ScreenLayout from '../../components/ScreenLayout'
import useGetJobs from '../../../data/API/hooks/jobs/useGetJobs';
import JobCard from '../../components/JobsSceen/JobCard';
import { formatDate } from '../../utils/formatDate';
import { useNavigation } from '@react-navigation/native';
import { UseNavigationType } from '../../navigation/types';
import JobFilterBar from '../../components/JobFilterBar';
import SearchBar from '../../components/SearchBar';
import Icon from 'react-native-vector-icons/FontAwesome';

const JobsScreen = () => {
  const { jobs, loading, loadMore, refetch } = useGetJobs()
  const navigation = useNavigation<UseNavigationType>()

  const handleRedirectToJob = (jobId: string) => {
    navigation.navigate("JobDetailsScreen", {jobId})
  }

  const handleApplyFilters = () => {
    console.log('apply filters')
  }

  return (
    <ScreenLayout insets={['top','left','right']}>
      <View className='flex-1 px-3'>
        {/* <JobFilterBar onApplyFilters={handleApplyFilters} /> */}
        <View className='flex-row items-center gap-x-9'>
          <SearchBar handleSearch={refetch} />
          <Icon name='filter' size={30} color={'#1D4ED8'}/>
        </View>
        {(jobs?.length === 0 && !loading) && <Text className='text-white'>No jobs found</Text>}
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
            loading ? <View className='flex-1 items-center justify-center'><ActivityIndicator size="large" color="#fff" /></View> : null
          }
        />
      </View>
    </ScreenLayout>
  )
}

export default JobsScreen