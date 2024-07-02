"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";

// function AuthButton() {
//   return (
//     <form
//       onSubmit={async () => {
//         await signIn("google");
//       }}
//     >
//       <button type="submit" >
//
//         Signin with Google
//       </button>
//     </form>
//   );
// }
export function AuthButton({ user }) {
  if (user) {
    return (
      <>
        <button
          onClick={() => signOut()}
          className="bg-pink p-3 flex items-center"
        >
          {" "}
          <i className="pr-3">
            <FaGoogle />
          </i>
          Sign out
        </button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button
        onClick={() => signIn()}
        className="bg-pink p-3 flex items-center"
      >
        {" "}
        <i className="pr-3">
          <FaGoogle />
        </i>
        Sign in with Google
      </button>
    </>
  );
}

export default AuthButton;
