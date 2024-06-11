"use client";
import { signIn, signOut } from "@/auth";

function AuthButton({ user }) {
  const handleSignIn = async (e) => {
    e.preventDefault();
    await signIn("google");
  };

  const handleSignOut = async (e) => {
    e.preventDefault();
    await signOut();
  };

  return user === undefined ? (
    <form onSubmit={handleSignIn}>
      <button type="submit">Sign in with Google</button>
    </form>
  ) : (
    <form onSubmit={handleSignOut}>
      <button type="submit">Log Out</button>
    </form>
  );
}

export default AuthButton;
