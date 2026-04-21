import {
  FaWindows,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaXbox,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";

import { BsGlobe, BsNintendoSwitch } from "react-icons/bs";
import type { Platform } from "@/hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import type { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
    playstation: FaPlaystation,
    playstation5: FaPlaystation,
    playstation4: FaPlaystation,
    playstation3: FaPlaystation,
    playstation2: FaPlaystation,
    psp: FaPlaystation,
    "ps-vita": FaPlaystation,
    xbox: FaXbox,
    "xbox-one": FaXbox,
    "xbox-series-x": FaXbox,
    "xbox-old": FaXbox,
    xbox360: FaXbox,
    nintendo: BsNintendoSwitch,
    "nintendo-switch": BsNintendoSwitch,
    "nintendo-3ds": BsNintendoSwitch,
    "nintendo-ds": BsNintendoSwitch,
    "game-boy": BsNintendoSwitch,
    "game-boy-color": BsNintendoSwitch,
    "game-boy-advance": BsNintendoSwitch,
    nes: BsNintendoSwitch,
    snes: BsNintendoSwitch,
    "wii-u": BsNintendoSwitch,
    wii: BsNintendoSwitch,
    gamecube: BsNintendoSwitch,
    "nintendo-64": BsNintendoSwitch,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => {
        const IconComponent = iconMap[platform.slug];

        if (!IconComponent) return null;

        return (
          <Icon key={platform.slug} as={IconComponent} color={"gray.500"} />
        );
      })}
    </HStack>
  );
};

export default PlatformIconList;
