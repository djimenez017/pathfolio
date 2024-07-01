"use client";
import { signIn } from "@/auth";
import { FaGoogle } from "react-icons/fa";

function AuthButton() {
  return (
    <form
      onSubmit={async () => {
        await signIn("google");
      }}
    >
      <button type="submit" className="bg-blue p-3 flex items-center">
        <i className="pr-3">
          <FaGoogle />
        </i>
        Signin with Google
      </button>
    </form>
  );
}

export default AuthButton;
