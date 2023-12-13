import axios from 'axios';
import { Login, LoginResponse } from '../entities/auth.entity';
export const login = async (user: Login): Promise<LoginResponse> => {
  /*
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/login`,
      user
    );
    return response.data;

    */
  return {
    token: 'TOKEN_TESTING',
    user: { name: 'TESTING', email: 'TESTING' },
  };
};
