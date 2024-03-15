import { Stack, Text } from "@chakra-ui/react";

const UserDetailInfo: React.FC = () => {
  return (
    <Stack borderRadius={8} spacing={4} backgroundColor="aliceblue" padding={4}>
      <Text textAlign="start" as="b" fontSize="sm">
        First Name:{" "}
      </Text>
      <Text textAlign="start" as="b" fontSize="sm">
        Last Name:{" "}
      </Text>
      <Text textAlign="start" as="b" fontSize="sm">
        Gender:{" "}
      </Text>
      <Text textAlign="start" as="b" fontSize="sm">
        Date of Birth:{" "}
      </Text>
      <Text textAlign="start" as="b" fontSize="sm">
        Tech Stack:{" "}
      </Text>
    </Stack>
  );
};

export default UserDetailInfo;
