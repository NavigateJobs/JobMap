import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, Alert } from "react-native";
import MainButton from "../../components/MainButton";

export default function LoginTab() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill both fields");
      return;
    }

    console.log({ email, password });
    Alert.alert("Success", "Signed in!");
  };

  return (
    <View
      className="w-full bg-background py-8"
    //   keyboardShouldPersistTaps="handled"
    >

      {/* Email */}
      <Text className="text-textcolor-secondary mb-1">Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="john@example.com"
        placeholderTextColor="#94A3B8"
        keyboardType="email-address"
        autoCapitalize="none"
        className="bg-background-surface text-textcolor-primary px-4 py-3 rounded-xl mb-4"
      />

      {/* Password */}
      <Text className="text-textcolor-secondary mb-1">Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="••••••••"
        placeholderTextColor="#94A3B8"
        secureTextEntry
        className="bg-background-surface text-textcolor-primary px-4 py-3 rounded-xl mb-6"
      />

      {/* Submit Button */}
      <MainButton label="Sign In" onPress={handleSubmit} />
    </View>
  );
}
