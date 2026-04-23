import { Input, InputGroup } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import { useColorModeValue } from "../ui/color-mode";

const SearchInput = () => {
  const bg = useColorModeValue("white", "#212529");
  const borderColor = useColorModeValue("#ced4da", "#495057");
  const textColor = useColorModeValue("#212529", "#f8f9fa");
  const mutedColor = useColorModeValue("#6c757d", "#adb5bd");
  const hoverBorderColor = useColorModeValue("#86b7fe", "#6ea8fe");
  const focusBorderColor = useColorModeValue("#86b7fe", "#6ea8fe");
  const focusRing = useColorModeValue(
    "0 0 0 0.25rem rgba(13,110,253,.25)",
    "0 0 0 0.25rem rgba(110,168,254,.25)"
  );

  return (
    <InputGroup startElement={<LuSearch color={mutedColor} />}>
      <Input
        bg={bg}
        borderColor={borderColor}
        borderRadius="0.375rem"
        color={textColor}
        placeholder="Search Games..."
        variant="outline"
        _hover={{ borderColor: hoverBorderColor }}
        _placeholder={{ color: mutedColor }}
        _focusVisible={{
          borderColor: focusBorderColor,
          boxShadow: focusRing,
        }}
      />
    </InputGroup>
  );
};

export default SearchInput;
