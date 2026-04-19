import { HStack, Image, Switch } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import logo from "../../assets/logo.webp";
import { useColorMode } from "../ui/color-mode";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack justifyContent="space-between" >
      <Image
        src={logo}
        boxSize="60px"
        animation={`${spin} 6s linear infinite`}
      />
      <HStack>
        <Switch.Root
          checked={colorMode === "dark"}
          onCheckedChange={toggleColorMode}
          colorPalette="green"
        >
          <Switch.HiddenInput />
          <Switch.Control />
          <Switch.Label>Dark Mode</Switch.Label>
        </Switch.Root>
      </HStack>
    </HStack>
  );
};

export default NavBar;
