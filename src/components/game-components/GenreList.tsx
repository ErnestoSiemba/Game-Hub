import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { HStack, Image, Text } from "@chakra-ui/react";
import { List } from "@chakra-ui/react/list";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <List.Root>
      {data.map((genre) => (
        <List.Item key={genre.id} paddingY={'5px'}>
          <HStack>
            <Image
              boxSize={"32px"}
              src={getCroppedImageUrl(genre.image_background)}
              borderRadius={8}
            />
            <Text fontSize='lg'>{genre.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
