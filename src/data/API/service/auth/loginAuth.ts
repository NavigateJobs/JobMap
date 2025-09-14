import { JobLocator } from "../../../store/user.mmkv";
import apiClient from "../../axios-instance";

interface LoginData {
    email: string,
    password: string
}

export const loginAuth = async (data: LoginData) => {
  try {
    const response = await apiClient.post('/auth/login', data);
    const token = response.data.token;

    if (token) {
      JobLocator.set('token', token); // <-- store token in MMKV
      console.log('Token saved successfully in MMKV!');
    }

    return response.data;
  } catch (error: any) {
    console.error('Login error:', error.response?.data || error.message);
    throw error; 
  }
};
