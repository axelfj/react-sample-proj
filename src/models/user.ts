export type User = {
  username: string;
  firstname?: string;
  lastname?: string;
  password: string;
};

export const initialUser: User = {
  username: "",
  firstname: "",
  lastname: "",
  password: "",
};
