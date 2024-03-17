import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputProps,
} from "@chakra-ui/react";
import {
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";

interface ControlledInputProps<FormValues extends FieldValues = FieldValues>
  extends Omit<InputProps, "name" | "defaultValue">,
    UseControllerProps<FormValues> {
  label?: string;
}

function ControlledInput<FormValues extends FieldValues = FieldValues>({
  name,
  label,
  control,
  rules,
  ...props
}: ControlledInputProps<FormValues>) {
  const {
    field,
    fieldState: { error },
  } = useController<FormValues>({
    name,
    control,
    rules,
  });

  return (
    <FormControl label={label} isInvalid={!!error} id={name}>
      {label && <FormLabel>{label}</FormLabel>}
      <Input {...props} {...field} />
      <FormErrorMessage>{error?.message}</FormErrorMessage>
    </FormControl>
  );
}

export default ControlledInput;
