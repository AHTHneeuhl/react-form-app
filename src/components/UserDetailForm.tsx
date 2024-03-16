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
import { Controller, SubmitHandler, useForm } from "react-hook-form";
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
  techStack: string[];
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
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      gender: "",
      dateOfBirth: "",
      techStack: [],
    },
  });

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
          <Controller
            name="firstName"
            control={control}
            render={({ field }) => (
              <Input size="md" placeholder="First Name" {...field} />
            )}
          />

          {errors.firstName && (
            <FormErrorMessage>This field is required</FormErrorMessage>
          )}
        </Stack>
        <Stack gap={1}>
          <Text textAlign="start" as="b" fontSize="sm">
            Last Name
          </Text>
          <Controller
            name="lastName"
            control={control}
            render={({ field }) => (
              <Input size="md" placeholder="Last Name" {...field} />
            )}
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
          <Controller
            name="gender"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={genderOptions}
                placeholder="Select Gender"
                components={customComponents}
                // {...register("gender", { required: true })}
              />
            )}
          />
        </Stack>
        <Stack gap={1}>
          <Text textAlign="start" as="b" fontSize="sm">
            Date of Birth
          </Text>
          <Controller
            name="dateOfBirth"
            control={control}
            render={({ field }) => (
              <Input
                size="md"
                type="date"
                placeholder="DD / MM / YYYY"
                {...field}
              />
            )}
          />
        </Stack>
        <Stack gap={1}>
          <Text textAlign="start" as="b" fontSize="sm">
            Teck Stack
          </Text>
          <Controller
            name="techStack"
            control={control}
            render={({ field }) => (
              <Input size="md" placeholder="Enter Teck Stack" {...field} />
            )}
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
