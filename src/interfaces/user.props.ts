export interface NewUserProps {
  userId: string;
  name: string;
  email: string;
  role: string;
}

export interface UserProps {
  user: {
    userId: string;
    name: string;
    email: string;
    role: string;
  };
}

export interface AuthUserProps {
  user: NewUserProps;
  accessToken: string;
}
