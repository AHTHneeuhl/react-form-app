import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react";
import { GroupBase, Select, Props as SelectProps } from "chakra-react-select";
import {
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";

interface ControlledSelectProps<
  FormValues extends FieldValues = FieldValues,
  Option = unknown,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends Omit<SelectProps<Option, IsMulti, Group>, "name" | "defaultValue">,
    UseControllerProps<FormValues> {
  label?: string;
}

function ControlledSelect<
  FormValues extends FieldValues = FieldValues,
  Option = unknown,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
>({
  name,
  label,
  options,
  control,
  rules,
  ...selectProps
}: ControlledSelectProps<FormValues, Option, IsMulti, Group>) {
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
      <Select<Option, IsMulti, Group>
        options={options}
        {...selectProps}
        {...field}
      />
      <FormErrorMessage>{error?.message}</FormErrorMessage>
    </FormControl>
  );
}

export default ControlledSelect;
