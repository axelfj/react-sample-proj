export type Session = {
  isAuthenticated: boolean;
  redirectPath: string;
};

export const initialSession: Session = {
  isAuthenticated: false,
  redirectPath: "",
};
