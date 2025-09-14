import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, Alert } from "react-native";
import MainButton from "../../components/MainButton";
import { useLogin } from "../../../data/API/hooks/auth/useLogin";
import { useProviderAuth } from "../../context/AuthProvider";
import Toast from "react-native-toast-message";
import { validateEmail } from "../../hooks/useAuthValidation";

export default function LoginTab() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const {login, loading, error} = useLogin()
    const { handleSetToken } = useProviderAuth()

  const handleLogin = async () => {
    try {
      const response = await login(email, password)
      console.log('User logged in:', response);
      if (response?.token) {
          handleSetToken(response.token);
      }
    } catch (err: any) {
      console.log(err)
        Toast.show({
            type: 'error',
            text1: `${error}`,
        });
        setPasswordError(error ?? 'Invalid credentials') 
    }

  };

  const handleSubmit = () => {
    if (!validateEmail(email)){
        setEmailError("Invalid email format")
        return
    }

    if(validateEmail(email)){
      setEmailError('');
      setPasswordError('');

      handleLogin()
    }

  }

  return (
    <View
      className="w-full bg-background py-8"
    //   keyboardShouldPersistTaps="handled"
    >

      {/* Email */}
      <View className="mb-4">
        <Text className="text-textcolor-secondary mb-1">Email</Text>
        <TextInput
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            if (emailError) setEmailError('')
          }}
          placeholder="john@example.com"
          placeholderTextColor="#94A3B8"
          keyboardType="email-address"
          autoCapitalize="none"
          
          className="bg-background-surface text-textcolor-primary px-4 py-3 rounded-xl"
        />
        {emailError && <Text className="text-accent-error">{emailError}</Text>}
      </View>

      {/* Password */}
      <View className="mb-6">
        <Text className="text-textcolor-secondary mb-1">Password</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="••••••••"
          placeholderTextColor="#94A3B8"
          secureTextEntry
          className="bg-background-surface text-textcolor-primary px-4 py-3 rounded-xl"
        />
        {passwordError && <Text className="text-accent-error">{passwordError}</Text>}
      </View>

      {/* Submit Button */}
      <MainButton loading={loading} label="Sign In" onPress={handleSubmit} disabled={(email === '' || password === '') ? true : false}/>
    </View>
  );
}
