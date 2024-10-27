"use client";

import { Amplify } from "aws-amplify";

import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";

import { useAuthenticator } from "@aws-amplify/ui-react";

Amplify.configure(outputs);

export default function App() {
  const { user, signOut } = useAuthenticator();

  return (
    <main>
      <h1>{user?.signInDetails?.loginId}</h1>
      <button onClick={signOut}>Sign out</button>
    </main>
  );
}
