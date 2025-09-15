import React, { useState } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";

const jobTypes = ["Full-time", "Part-time", "Contract", "Remote", "Internship"];
const postedDates = ["Today", "Last 7 days", "Last 30 days"];

const JobFilterBar = ({ onApplyFilters }: { onApplyFilters: (filters: any) => void }) => {
  const [selectedJobType, setSelectedJobType] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [location, setLocation] = useState<string | null>(null);

  const applyFilters = () => {
    onApplyFilters({
      jobType: selectedJobType,
      date: selectedDate,
      location,
    });
  };

  const FilterChip = ({
    label,
    selected,
    onPress,
    color,
  }: {
    label: string;
    selected: boolean;
    onPress: () => void;
    color: "primary" | "success" | "purple";
  }) => {
    const colors: Record<string, { bg: string; border: string }> = {
      primary: { bg: "bg-primary-DEFAULT", border: "border-primary-light" },
      success: { bg: "bg-accent-success", border: "border-accent-success" },
      purple: { bg: "bg-accent-purple", border: "border-accent-purple" },
    };

    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        className={`mr-3 px-4 py-2 rounded-lg border shadow-sm
          ${selected ? colors[color].bg : "bg-background-DEFAULT " + colors[color].border}`}
      >
        <Text
          className={`text-sm ${
            selected ? "text-textcolor-primary font-semibold" : "text-textcolor-secondary"
          }`}
        >
          {label}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View className="bg-background-surface py-3">
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 12 }}>
        
        {/* Job Type */}
        {jobTypes.map((type) => (
          <FilterChip
            key={type}
            label={type}
            selected={selectedJobType === type}
            onPress={() => setSelectedJobType(selectedJobType === type ? null : type)}
            color="primary"
          />
        ))}

        {/* Date Posted */}
        {postedDates.map((date) => (
          <FilterChip
            key={date}
            label={date}
            selected={selectedDate === date}
            onPress={() => setSelectedDate(selectedDate === date ? null : date)}
            color="purple"
          />
        ))}

        {/* Location */}
        <FilterChip
          label="Remote"
          selected={!!location}
          onPress={() => setLocation(location ? null : "Remote")}
          color="success"
        />

        {/* Apply Button */}
        <TouchableOpacity
          onPress={applyFilters}
          activeOpacity={0.8}
          className="ml-3 px-5 py-2 rounded-lg bg-primary-dark shadow-md"
        >
          <Text className="text-textcolor-primary font-semibold">Apply</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default JobFilterBar;
