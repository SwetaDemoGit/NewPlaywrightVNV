import { User } from "@models/User";
import { UserService } from "@services/UserService";
import { Header } from "@components/Header";
import { formatDate } from "@utils/formatDate";

// This file demonstrates the import style.
// UserService is a function in this simple example.
const user: User = UserService();

Header();

console.log(user);
console.log(formatDate(new Date()));
