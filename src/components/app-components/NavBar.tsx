import { HStack, Image, Switch } from "@chakra-ui/react";
import logo from "../../assets/logo.webp";
import { useColorMode } from "../ui/color-mode";

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <HStack>
        <Switch.Root
          checked={colorMode === "dark"}
          onCheckedChange={toggleColorMode}
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
