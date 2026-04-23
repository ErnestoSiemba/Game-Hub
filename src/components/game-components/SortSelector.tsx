import { Button, HStack, Menu, Portal } from "@chakra-ui/react";
import { LuChevronDown } from "react-icons/lu";

const SortSelector = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          <HStack gap="2">
            <span>Order By: Relevance</span>
            <LuChevronDown />
          </HStack>
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="1">Relevance</Menu.Item>
            <Menu.Item value="2">Date Added</Menu.Item>
            <Menu.Item value="3">Name</Menu.Item>
            <Menu.Item value="4">Release Date</Menu.Item>
            <Menu.Item value="5">Popularity</Menu.Item>
            <Menu.Item value="6">Average Rating</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
