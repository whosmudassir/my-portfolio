import React from "react";
import {
  VStack,
  HStack,
  Button,
  IconButton,
  Icon,
  Text,
  NativeBaseProvider,
  Center,
  Box,
  StatusBar,
} from "native-base";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Nav() {
  return (
    <>
      <StatusBar backgroundColor="red" barStyle="light-content" />

      <Box safeAreaTop backgroundColor="red" />

      <HStack
        bg="white"
        px="1"
        py="3"
        justifyContent="space-between"
        alignItems="center"
      >
        <HStack space="4" alignItems="center">
          <Text color="black" fontSize="20">
            Home
          </Text>
        </HStack>
        <HStack space="5" alignItems="center">
          <Link to="/projects">
            <Text color="black">projects </Text>
          </Link>

          <Link to="/blog">
            {" "}
            <Text color="black">blogs </Text>
          </Link>
          <FontAwesomeIcon icon={faGithub} />
        </HStack>
      </HStack>
    </>
  );
}

export default Nav;
