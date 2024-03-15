import { Button, Heading, Input, Select, Stack, Text } from "@chakra-ui/react";

const UserDetailForm: React.FC = () => {
  return (
    <Stack
      spacing={2}
      padding={2}
      backgroundColor="aliceblue"
      borderRadius={4}
      maxWidth="fit-content"
    >
      <Heading>Basic Details</Heading>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack gap={1}>
          <Text textAlign="start">First Name</Text>
          <Input size="md" placeholder="First Name" />
        </Stack>
        <Stack gap={1}>
          <Text textAlign="start">Last Name</Text>
          <Input size="md" placeholder="Last Name" />
        </Stack>
      </Stack>
      <Heading>Other Information</Heading>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack gap={1}>
          <Text>Gender</Text>
          <Select size="md" placeholder="Select Gender" />
        </Stack>
        <Stack gap={1}>
          <Text>Date of Birth</Text>
          <Input size="md" type="date" placeholder="DD / MM / YYYY" />
        </Stack>
        <Stack gap={1}>
          <Text>Teck Stack</Text>
          <Input size="md" placeholder="Enter Teck Stack" />
        </Stack>
      </Stack>
      <Button
        type="submit"
        size="md"
        borderRadius={4}
        paddingY={2}
        paddingX={4}
        alignSelf="flex-end"
      >
        Submit
      </Button>
    </Stack>
  );
};

export default UserDetailForm;
