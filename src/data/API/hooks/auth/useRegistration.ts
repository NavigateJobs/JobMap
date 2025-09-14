import { useState } from 'react';
import { registrationAuth } from '../../service/auth/registrationAuth';

export const useRegistration = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const register = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await registrationAuth({ email, password });
      return data;
    } catch (err: any) {
      setError(
        err.response?.data?.error || err.response?.data?.message || 'Something went wrong'
        );
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { register, loading, error };
};
