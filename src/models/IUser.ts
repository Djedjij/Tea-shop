export interface IUser {
  name: string;
  address: string;
  password: string;
  email: string;
}

export interface UserState {
  user: IUser;
  isAuth: boolean;
  accessToken: string;
  refreshToken: string;
  isLoading: boolean;
  error: string;
  isLogin: boolean;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
}

export interface ILogin {
  email: string;
  password: string;
}
