import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface JobProps {
  company: string;
  position: string;
  description: string;
  location: string;
  salary: string;
  createdAt: string;
  onPress?: () => void;
}

const JobCard: React.FC<JobProps> = ({
  company,
  position,
  description,
  location,
  salary,
  createdAt,
  onPress,
}) => {
  return (
    <View style={styles.card}>
      {/* Company & Position */}
      <Text style={styles.position}>{position}</Text>
      <Text style={styles.company}>{company}</Text>

      {/* Description */}
      <Text style={styles.description} numberOfLines={3}>
        {description}
      </Text>

      {/* Location & Salary */}
      <View style={styles.row}>
        <Text style={styles.label}>📍 {location}</Text>
        <Text style={styles.label}>💰 {salary}</Text>
      </View>

      {/* Created date */}
      <Text style={styles.date}>Posted on {createdAt}</Text>

      {/* Button */}
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>View Job</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1E293B', // surface
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 4,
  },
  company: {
    color: '#F8FAFC', // primary text
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 4,
  },
  position: {
    color: '#60A5FA', // primary light
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  description: {
    color: '#94A3B8', // secondary text
    fontSize: 14,
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  label: {
    color: '#F8FAFC',
    fontSize: 14,
  },
  date: {
    color: '#94A3B8',
    fontSize: 12,
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#3B82F6', // primary
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#F8FAFC',
    fontSize: 15,
    fontWeight: '600',
  },
});

export default JobCard;
