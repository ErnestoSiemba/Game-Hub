import useGenres, { type Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { Button, HStack, Image, Link, Spinner, Text } from "@chakra-ui/react";
import { List } from "@chakra-ui/react/list";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List.Root>
      {data.map((genre) => (
        <List.Item key={genre.id} paddingY={"5px"}>
          <HStack>
            <Image
              boxSize={"32px"}
              src={getCroppedImageUrl(genre.image_background)}
              borderRadius={8}
            />
            <Link
              onClick={() => onSelectGenre(genre)}
              variant={"plain"}
              fontSize="lg"
            >
              {genre.name}
            </Link>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
