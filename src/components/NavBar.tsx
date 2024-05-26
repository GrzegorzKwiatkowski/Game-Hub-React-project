import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/GameHub_logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchImput from "./SearchImput";
interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding={"10px"}>
      <Image src={logo} boxSize={"60px"}></Image>
      <SearchImput onSearch={onSearch}></SearchImput>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
