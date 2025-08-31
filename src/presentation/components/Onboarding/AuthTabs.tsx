import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";

type TabIndex = 0 | 1;
type AuthTabsProps = {
  onTabChange: (tabIndex: TabIndex) => void
};

export default function AuthTabs({ onTabChange }: AuthTabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabPress = (tabIndex: TabIndex) => {
    setActiveTab(tabIndex);
    onTabChange(tabIndex)
  };

  return (
    <View className="flex-row bg-background-surface rounded-xl p-1 mb-6">
      {/* Log In Tab */}
      <Pressable
        onPress={() => handleTabPress(0)}
        className={`
          flex-1 py-3 rounded-lg items-center justify-center
          ${activeTab === 0 ? "bg-primary-light/50" : ""}
        `}
      >
        <Text
          className={`
            text-lg font-semibold
            ${activeTab === 0 ? "text-textcolor-primary" : "text-textcolor-secondary"}
          `}
        >
          Log In
        </Text>
      </Pressable>

      {/* Sign Up Tab */}
      <Pressable
        onPress={() => handleTabPress(1)}
        className={`
          flex-1 py-3 rounded-lg items-center justify-center
          ${activeTab === 1 ? "bg-primary-light/50" : ""}
        `}
      >
        <Text
          className={`
            text-lg font-semibold
            ${activeTab === 1 ? "text-textcolor-primary" : "text-textcolor-secondary"}
          `}
        >
          Sign Up
        </Text>
      </Pressable>
    </View>
  );
}
