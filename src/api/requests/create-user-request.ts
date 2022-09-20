export interface CreateUserRequest {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  avatar: string;
  zipcode: string;
  state: string;
  country: string;
  phone: string;
}
