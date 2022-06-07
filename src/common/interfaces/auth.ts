export interface ILogin {
  email: string;
  password: string;
}

export interface AuthCredentials {
  access_token: string;
  exp: string;
  expires_in: number;
  refresh_token: string;
  token_type: string;
}
