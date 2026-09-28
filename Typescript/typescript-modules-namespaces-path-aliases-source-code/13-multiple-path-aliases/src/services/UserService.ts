import { User } from "@models/User";

export function getUser(): User {
  return {
    id: 101,
    name: "John"
  };
}
