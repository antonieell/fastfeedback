import { Button, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import { useAuth } from "../lib/auth";

export default function Home() {
  const auth = useAuth();
  return (
    <div>
      <main>
        <Heading>Fast feedbacks</Heading>

        <Text>
          Get started by editing <Code>pages/index.js</Code>
        </Text>
        <div>{auth?.user?.email}</div>
        {auth.user ? (
          <Button onClick={() => auth.signout()}>Sign out</Button>
        ) : (
          <Button onClick={() => auth.signinWithGitHub()}>Sign In</Button>
        )}
      </main>
    </div>
  );
}
