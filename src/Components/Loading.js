import { Box } from "@chakra-ui/react";
import { PuffLoader } from "react-spinners";

export const Loading = () => {
  return (
    <Box w={"100%"} h={"100%"} bgColor={"yellow"}>
      <PuffLoader color="#3d6aab" size={100} />
      테스트 중입니다
    </Box>
  );
};
