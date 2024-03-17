import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { ControlledSelect } from "components/core";

const genderOptions = [
  {
    label: "Male",
    value: "male",
  },
  {
    label: "Female",
    value: "female",
  },
  {
    label: "Other",
    value: "other",
  },
];

type TGender = {
  label: string;
  value: string;
};

interface IFormValues {
  firstName: string;
  lastName: string;
  gender: TGender[];
  dateOfBirth: string;
  techStack: string[];
}

const defaultFormValues: IFormValues = {
  firstName: "",
  lastName: "",
  gender: [],
  dateOfBirth: "",
  techStack: [],
};

const UserDetailForm: React.FC = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>({
    defaultValues: defaultFormValues,
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
        <FormControl id="firstName" isInvalid={!!errors.firstName}>
          <FormLabel>First Name</FormLabel>
          <Input
            placeholder="First Name"
            type="text"
            {...register("firstName")}
          />
          <FormErrorMessage>{errors.firstName?.message}</FormErrorMessage>
        </FormControl>

        <FormControl id="lastName" isInvalid={!!errors.lastName}>
          <FormLabel>Last Name</FormLabel>
          <Input
            placeholder="Last Name"
            type="text"
            {...register("lastName")}
          />
          <FormErrorMessage>{errors.lastName?.message}</FormErrorMessage>
        </FormControl>
      </Grid>
      <Heading fontSize="md">Other Information</Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        <ControlledSelect<IFormValues, TGender, false>
          name="gender"
          control={control}
          label="Select Gender"
          placeholder="Select Gender"
          options={genderOptions}
        />

        <FormControl id="dateOfBirth" isInvalid={!!errors.dateOfBirth}>
          <FormLabel>Date of Birth</FormLabel>
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
        </FormControl>

        <FormControl id="techStack" isInvalid={!!errors.techStack}>
          <FormLabel>Teck Stack</FormLabel>
          <Input
            placeholder="Tech Stack"
            type="text"
            {...register("techStack")}
          />
        </FormControl>
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
