import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      // boxShadow={
      //   ColorMode === "light"
      //     ? " 1px 1px 1px 1px lightgrey,  1px 1px 1px lightgrey;"
      //     : ""
      // }
      borderRadius={40}
      overflow={"hidden"}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
