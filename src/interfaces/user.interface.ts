export interface User {
  username: string;
  roles: string[];
}

export const userEmpty: User = {
  username: "",
  roles: [],
};
