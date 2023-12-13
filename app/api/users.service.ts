import axios from 'axios';
import { User } from '../entities/user.entity';

export const getUser = async (id: string): Promise<User> => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/users/${id}`,
  );
  return response.data;
};
