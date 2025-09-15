import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, Alert } from "react-native";
import MainButton from "../../components/MainButton";
import { validateEmail, validatePassword } from "../../utils/authValidation";
import { useRegistration } from "../../../data/API/hooks/auth/useRegistration";
import Toast from "react-native-toast-message";
import { useProviderAuth } from "../../context/AuthProvider";

export default function RegistrationTab() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [repeatPasswordError, setRepeatPasswordError] = useState('')

  const { register, loading, error } = useRegistration();
  const { handleSetToken } = useProviderAuth();

    const handleRegister = async () => {
        try {
            const response = await register(email, password);
            console.log('User registered:', response);
            if (response?.token) {
                handleSetToken(response.token);
            }

        } catch (err: any) {
            Toast.show({
                type: 'error',
                text1: `${error}`,
            });
            setEmailError(error ?? 'Incorrect email format')
        }
    };

    const handleSubmit = () => {
        const newErrors: string[] = [];
        if (!validateEmail(email)){
            newErrors.push("Invalid email format");
            setEmailError("Invalid email format")
        }
        if (!validatePassword(password)) {
            newErrors.push("Password must include uppercase, lowercase, number, 8+ chars");
            setPasswordError("Password must include uppercase, lowercase, number, 8+ chars");
        }
        if (password !== repeatPassword) {
            newErrors.push("Passwords do not match")
            setRepeatPasswordError("Passwords do not match")
        };

        setErrors(newErrors);

        console.log(errors)
        if (
            validateEmail(email) &&
            validatePassword(password) &&
            password === repeatPassword
        ) {
            // All validations passed
            setEmailError('');
            setPasswordError('');
            setRepeatPasswordError('');
            console.log('success');

            handleRegister()
        }
    };

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
            className="bg-background-surface text-textcolor-primary px-4 py-3 rounded-xl mb-1"
        />
        {emailError && <Text className="text-accent-error">{emailError}</Text>}
    </View>

      {/* Password */}
    <View className="mb-4">
        <Text className="text-textcolor-secondary mb-1">Password</Text>
        <TextInput
        value={password}
        onChangeText={(text) => {
            setPassword(text);
            if (passwordError) {
                setPasswordError('')
                setRepeatPassword('')
                setRepeatPasswordError('')
            }
        }}
        placeholder="••••••••"
        placeholderTextColor="#94A3B8"
        secureTextEntry
        className="bg-background-surface text-textcolor-primary px-4 py-3 rounded-xl mb-1"
        />
        {passwordError && <Text className="text-accent-error">{passwordError}</Text>}
    </View>

    <View className="mb-4">
        <Text className="text-textcolor-secondary mb-1">Repeat Password</Text>
        <TextInput
        value={repeatPassword}
        onChangeText={(text) => {
            setRepeatPassword(text);
            if (repeatPasswordError) {
                setRepeatPasswordError('')
            }
        }}
        placeholder="••••••••"
        placeholderTextColor="#94A3B8"
        secureTextEntry
        className="bg-background-surface text-textcolor-primary px-4 py-3 rounded-xl mb-4"
        />
        {repeatPasswordError && <Text className="text-accent-error">{repeatPasswordError}</Text>}
    </View>


      {/* Submit Button */}
      <MainButton loading={loading} label="Sign Up" onPress={handleSubmit} disabled={(email === '' || password === '' || repeatPassword === '') || (emailError || passwordError || repeatPasswordError) ? true : false} />
    </View>
  );
}
