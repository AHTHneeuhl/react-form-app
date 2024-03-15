import {
  Button,
  Grid,
  Heading,
  Input,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";

const UserDetailForm: React.FC = () => {
  return (
    <Stack
      spacing={4}
      padding={4}
      backgroundColor="aliceblue"
      borderRadius={8}
      maxWidth="fit-content"
    >
      <Heading fontSize="md">Basic Details</Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        <Stack gap={1}>
          <Text textAlign="start" as="b" fontSize="sm">
            First Name
          </Text>
          <Input size="md" placeholder="First Name" />
        </Stack>
        <Stack gap={1}>
          <Text textAlign="start" as="b" fontSize="sm">
            Last Name
          </Text>
          <Input size="md" placeholder="Last Name" />
        </Stack>
      </Grid>
      <Heading fontSize="md">Other Information</Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        <Stack gap={1}>
          <Text textAlign="start" as="b" fontSize="sm">
            Gender
          </Text>
          <Select size="md" placeholder="Select Gender" />
        </Stack>
        <Stack gap={1}>
          <Text textAlign="start" as="b" fontSize="sm">
            Date of Birth
          </Text>
          <Input size="md" type="date" placeholder="DD / MM / YYYY" />
        </Stack>
        <Stack gap={1}>
          <Text textAlign="start" as="b" fontSize="sm">
            Teck Stack
          </Text>
          <Input size="md" placeholder="Enter Teck Stack" />
        </Stack>
      </Grid>
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
