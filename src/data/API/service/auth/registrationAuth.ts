
import { JobLocator } from '../../../store/user.mmkv';
import apiClient from '../../axios-instance'
interface RegistrationData {
  email: string;
  password: string;
}


export const registrationAuth = async (data: RegistrationData) => {
  try {
    const response = await apiClient.post('/auth/register', data);
    const token = response.data.token;

    if (token) {
      JobLocator.set('token', token); // <-- store token in MMKV
      console.log('Token saved successfully in MMKV!');
    }

    return response.data;
  } catch (error: any) {
    console.error('Registration error:', error.response?.data || error.message);
    throw error; 
  }
};
