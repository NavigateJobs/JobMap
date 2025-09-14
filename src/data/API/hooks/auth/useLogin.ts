import { useState } from 'react';
import { loginAuth } from '../../service/auth/loginAuth';

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await loginAuth({ email, password });
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

  return { login, loading, error };
};
