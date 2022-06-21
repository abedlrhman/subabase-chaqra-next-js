import {
  Flex,
  useColorModeValue,
  Stack,
  Heading,
  FormControl,
  Input,
  Button,
  Text,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";

const Login: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex minH={"100vh"} align={"center"} justify={"center"} bg={"black"}>
        <Stack
          spacing={4}
          w={"full"}
          maxW={"md"}
          bg={"whiteAlpha.900"}
          rounded={"xl"}
          p={6}
        >
          <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
            Login
          </Heading>
          <Text
            fontSize={{ base: "sm", sm: "md" }}
            color={useColorModeValue("gray.800", "gray.400")}
          >
            You&apos;ll get an email with a login link
          </Text>
          <FormControl id="email">
            <Input
              placeholder="your-email@example.com"
              _placeholder={{ color: "gray.500" }}
              type="email"
              autoComplete="off"
            />
          </FormControl>
          <Stack spacing={6}>
            <Button
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
            >
              Login
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </div>
  );
};

export default Login;