import { HStack, Image, Switch } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import logo from "../../assets/logo.webp";
import { useColorMode } from "../ui/color-mode";
import SearchInput from "./SearchInput";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Image
        src={logo}
        boxSize="60px"
        animation={`${spin} 6s linear infinite`}
      />
      <SearchInput onSearch={onSearch} />
      <HStack>
        <Switch.Root
          checked={colorMode === "dark"}
          onCheckedChange={toggleColorMode}
          colorPalette="green"
        >
          <Switch.HiddenInput />
          <Switch.Control />
          <Switch.Label whiteSpace="nowrap">Dark Mode</Switch.Label>
        </Switch.Root>
      </HStack>
    </HStack>
  );
};

export default NavBar;
