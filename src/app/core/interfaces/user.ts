export interface UserState {
  id: string | null;
  user: User | null;
  loaded: boolean;
  loading: boolean;
  error: any;
}

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
}
