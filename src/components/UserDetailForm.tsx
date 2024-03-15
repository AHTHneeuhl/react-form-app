import {
  Button,
  FormErrorMessage,
  Grid,
  Heading,
  Icon,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { OptionProps, Select, chakraComponents } from "chakra-react-select";
import { SubmitHandler, useForm } from "react-hook-form";
import { GiCherry, GiCoffeeBeans, GiStrawberry } from "react-icons/gi";

const genderOptions = [
  {
    label: "Male",
    value: "male",
    icon: <Icon as={GiCoffeeBeans} color="orange.700" mr={2} h={5} w={5} />,
  },
  {
    label: "Female",
    value: "female",
    icon: <Icon as={GiStrawberry} color="red.500" mr={2} h={5} w={5} />,
  },
  {
    label: "Other",
    value: "other",
    icon: <Icon as={GiCherry} color="yellow.500" mr={2} h={5} w={5} />,
  },
];

interface IFormValues {
  firstName: string;
  lastName: string;
  gender: string;
  dateOfBirth: string;
  techStack: string;
}

const customComponents = {
  Option: ({ children, data, ...props }: OptionProps<any, boolean, any>) => (
    <chakraComponents.Option {...props} data={data}>
      {children} {data.icon}
    </chakraComponents.Option>
  ),
};

const UserDetailForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = (data) => console.log(data);

  return (
    <Stack
      as="form"
      spacing={4}
      padding={4}
      backgroundColor="aliceblue"
      borderRadius={8}
      maxWidth="fit-content"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Heading fontSize="md">Basic Details</Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        <Stack gap={1}>
          <Text textAlign="start" as="b" fontSize="sm">
            First Name
          </Text>
          <Input
            size="md"
            placeholder="First Name"
            {...register("firstName", { required: true })}
          />
          {errors.firstName && (
            <FormErrorMessage>This field is required</FormErrorMessage>
          )}
        </Stack>
        <Stack gap={1}>
          <Text textAlign="start" as="b" fontSize="sm">
            Last Name
          </Text>
          <Input
            size="md"
            placeholder="Last Name"
            {...register("lastName", { required: true })}
          />
          {errors.lastName && (
            <FormErrorMessage>This field is required</FormErrorMessage>
          )}
        </Stack>
      </Grid>
      <Heading fontSize="md">Other Information</Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        <Stack gap={1}>
          <Text textAlign="start" as="b" fontSize="sm">
            Gender
          </Text>
          <Select
            name="gender"
            options={genderOptions}
            placeholder="Select Gender"
            components={customComponents}
            // {...register("gender", { required: true })}
          />
        </Stack>
        <Stack gap={1}>
          <Text textAlign="start" as="b" fontSize="sm">
            Date of Birth
          </Text>
          <Input
            size="md"
            type="date"
            placeholder="DD / MM / YYYY"
            {...register("dateOfBirth", { required: true })}
          />
        </Stack>
        <Stack gap={1}>
          <Text textAlign="start" as="b" fontSize="sm">
            Teck Stack
          </Text>
          <Input
            size="md"
            placeholder="Enter Teck Stack"
            {...register("techStack", { required: true })}
          />
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
