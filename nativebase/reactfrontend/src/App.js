import React from "react";
import {
  NativeBaseProvider,
  Box,
  Button,
  useColorModeValue
} from "native-base";
import { useColorMode, Text } from "native-base";

export default function App() {
  const { toggleColorMode } = useColorMode();

  return (
    <NativeBaseProvider>
      <Box
        p="4"
        flex="1"
        bg={useColorModeValue("warmGray.50", "coolGray.800")}
        maxW="300"
        w="100%"
      >
        <Text fontSize="lg" display="flex" mb={20}>
          The active color mode is{" "}
          <Text bold fontSize="18px">
            {useColorModeValue("Light", "Dark")}
          </Text>
        </Text>
        <Button onPress={() => toggleColorMode}>Toggle</Button>
        {console.log(toggleColorMode)}
      </Box>
    </NativeBaseProvider>
  );
}
