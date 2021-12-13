import { getSession } from "next-auth/client";

export const getCurrentUser = async () => {
  const session = await getSession();
  const currentUser = session.user.email;
  return currentUser;
};
