import { convexAuth } from "@convex-dev/auth/server";
import github from "@auth/core/providers/github";
import Google from "@auth/core/providers/google";

export const { auth, signIn, signOut, store, isAuthenticated } = convexAuth({
  providers: [github, Google],
});
