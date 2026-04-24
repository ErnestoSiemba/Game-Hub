import useGenres, { type Genre } from "@/hooks/useGenres";
import { useColorModeValue } from "@/components/ui/color-mode";
import getCroppedImageUrl from "@/services/image-url";
import { Heading, HStack, Image, Link, Spinner } from "@chakra-ui/react";
import { List } from "@chakra-ui/react/list";

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  // Keep the selected genre readable in both light and dark themes.
  const activeGenreColor = useColorModeValue("green.600", "green.300");

  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
    <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
    <List.Root>
      {data.map((genre) => (
        <List.Item key={genre.id} paddingY={"5px"}>
          <HStack>
            <Image
              boxSize={"32px"}
              objectFit='cover'
              src={getCroppedImageUrl(genre.image_background)}
              borderRadius={8}
            />
            <Link
              onClick={() => onSelectGenre(genre)}
              variant={"plain"}
              fontSize="lg"
              color={
                selectedGenre?.id === genre.id ? activeGenreColor : undefined
              }
              fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
            >
              {genre.name}
            </Link>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
    </>
  );
};

export default GenreList;
