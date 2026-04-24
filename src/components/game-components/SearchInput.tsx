import { Button, HStack, Input, InputGroup } from "@chakra-ui/react";
import { LuSearch, LuX } from "react-icons/lu";
import { useColorModeValue } from "../ui/color-mode";
import { useRef, useState } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const bg = useColorModeValue("white", "#212529");
  const borderColor = useColorModeValue("#ced4da", "#495057");
  const textColor = useColorModeValue("#212529", "#f8f9fa");
  const mutedColor = useColorModeValue("#6c757d", "#adb5bd");
  const hoverBorderColor = useColorModeValue("#86b7fe", "#6ea8fe");
  const focusBorderColor = useColorModeValue("#86b7fe", "#6ea8fe");
  const clearButtonBg = useColorModeValue("#f8f9fa", "#343a40");
  const clearButtonHoverBg = useColorModeValue("#e9ecef", "#495057");
  const focusRing = useColorModeValue(
    "0 0 0 0.25rem rgba(13,110,253,.25)",
    "0 0 0 0.25rem rgba(110,168,254,.25)",
  );

  const ref = useRef<HTMLInputElement>(null);
  const [searchText, setSearchText] = useState("");

  const handleClear = () => {
    setSearchText("");
    onSearch("");
    ref.current?.focus();
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSearch(searchText);
      }}
    >
      <HStack gap={0}>
        <InputGroup startElement={<LuSearch color={mutedColor} />} flex="1">
          <Input
            ref={ref}
            bg={bg}
            borderColor={borderColor}
            borderRadius="20px 0 0 20px"
            borderRightWidth="0"
            color={textColor}
            placeholder="Search Games..."
            value={searchText}
            variant="outline"
            onChange={(event) => setSearchText(event.target.value)}
            _hover={{ borderColor: hoverBorderColor }}
            _placeholder={{ color: mutedColor }}
            _focusVisible={{
              borderColor: focusBorderColor,
              boxShadow: focusRing,
            }}
          />
        </InputGroup>
        <Button
          aria-label="Clear search"
          bg={clearButtonBg}
          borderColor={borderColor}
          borderLeftWidth="1px"
          borderRadius="0 20px 20px 0"
          color={mutedColor}
          onClick={handleClear}
          px={4}
          variant="outline"
          _hover={{ bg: clearButtonHoverBg }}
        >
          <LuX />
        </Button>
      </HStack>
    </form>
  );
};

export default SearchInput;
