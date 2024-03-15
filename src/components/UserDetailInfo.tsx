import { Stack, Text } from "@chakra-ui/react";

const UserDetailInfo: React.FC = () => {
  return (
    <Stack borderRadius={4} backgroundColor="aliceblue" padding={4}>
      <Text>First Name: </Text>
      <Text>Last Name: </Text>
      <Text>Gender: </Text>
      <Text>Date of Birth: </Text>
      <Text>Tech Stack: </Text>
    </Stack>
  );
};

export default UserDetailInfo;
