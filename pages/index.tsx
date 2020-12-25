import { Button, Heading, Text, Code, Flex } from "@chakra-ui/react";
import Head from "next/head";
import { useAuth } from "@/lib/auth";
import { Logo } from "@/styles/theme";

export default function Home() {
  const auth = useAuth();
  return (
    <Flex as="main" direction="column" align="center" justify="center" h="full">
      <Head>
        <title>Fast Feedback</title>
      </Head>
      <Logo boxSize={16} />

      {auth.user ? (
        <Button mt={4} onClick={() => auth.signout()}>
          Sign out
        </Button>
      ) : (
        <Button mt={4} size="sm" onClick={() => auth.signinWithGitHub()}>
          Sign In
        </Button>
      )}
    </Flex>
  );
}
