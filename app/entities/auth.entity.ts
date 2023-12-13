import { User } from './user.entity';

export interface Login {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: User;
}
