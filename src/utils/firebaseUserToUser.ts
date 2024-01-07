import {
  User as FirebaseUser,
} from "firebase/auth";
import { User } from "../types/user";

export function firebaseUserToUser(
    firebaseUser: FirebaseUser | null
  ): User | undefined {
    return firebaseUser
      ? {
          email: firebaseUser.email,
        }
      : undefined;
  }