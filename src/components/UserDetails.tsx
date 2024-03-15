import { Heading, Stack } from "@chakra-ui/react";
import UserDetailForm from "./UserDetailForm";

const UserDetails: React.FC = () => {
  return (
    <Stack>
      <Heading textAlign="center">User Details</Heading>
      <UserDetailForm />
    </Stack>
  );
};

export default UserDetails;
