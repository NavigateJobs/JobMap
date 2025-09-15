import { RouteProp, useRoute } from '@react-navigation/native'
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native'
import { RootStackParamList } from '../../navigation/types'
import ScreenLayout from '../../components/ScreenLayout'
import GoBack from '../../components/GoBack'
import useGetJobDetails from '../../../data/API/hooks/jobs/useGetJobDetails'
import { formatDate } from '../../utils/formatDate'

type JobDetailsRouteProp = RouteProp<RootStackParamList, 'JobDetailsScreen'>

const JobDetailsScreen = () => {
  const route = useRoute<JobDetailsRouteProp>()
  const { jobId } = route.params
  const {job, loading, error} = useGetJobDetails(jobId)

  return (
    <ScreenLayout>
      <View className='flex-1 px-3'>
        <GoBack />
        {loading && 
          <View className='flex-1 justify-center items-center'>
            <Text> 
              <ActivityIndicator size={'large'} color={'#fff'} /> 
            </Text>
          </View>
        }
        <ScrollView style={styles.container}>
          <Text style={styles.title}>{job?.title}</Text>
          <Text style={styles.company}>{job?.company}</Text>

          <View style={styles.metaRow}>
            <Text style={styles.label}>Location: </Text>
            <Text style={styles.value}>{job?.location}</Text>
          </View>

          <View style={styles.metaRow}>
            <Text style={styles.label}>Salary: </Text>
            <Text style={styles.value}>{job?.salary || 'Not specified'}</Text>
          </View>

          <View style={styles.metaRow}>
            <Text style={styles.label}>Type: </Text>
            <Text style={styles.value}>{job?.type}</Text>
          </View>

          <View style={styles.metaRow}>
            <Text style={styles.label}>Posted: </Text>
            <Text style={styles.value}>{formatDate(job?.created_at || '')}</Text>
          </View>

          <Text style={styles.sectionTitle}>Job Description</Text>
          <Text style={styles.description}>{job?.description}</Text>
        </ScrollView>
      </View>
    </ScreenLayout>
  )
}

export default JobDetailsScreen

// Color theme pulled from your palette
const stylesVars = {
  background: {
    DEFAULT: '#0F172A',
    surface: '#1E293B',
  },
  textcolor: {
    primary: '#F8FAFC',
    secondary: '#94A3B8',
  },
  primary: {
    light: '#60A5FA',
    DEFAULT: '#3B82F6',
    dark: '#1D4ED8',
  },
  accent: {
    success: '#22C55E',
    error: '#EF4444',
    warning: '#EAB308',
    purple: '#A855F7',
  },
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: stylesVars.background.DEFAULT,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: stylesVars.background.DEFAULT,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: stylesVars.textcolor.primary,
    marginBottom: 4,
  },
  company: {
    fontSize: 16,
    color: stylesVars.primary.light,
    marginBottom: 16,
  },
  metaRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    color: stylesVars.textcolor.secondary,
  },
  value: {
    fontSize: 14,
    color: stylesVars.textcolor.primary,
  },
  sectionTitle: {
    marginTop: 16,
    fontSize: 18,
    fontWeight: '600',
    color: stylesVars.textcolor.primary,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    color: stylesVars.textcolor.secondary,
  },
  error: {
    color: stylesVars.accent.error,
    fontSize: 16,
  },
})