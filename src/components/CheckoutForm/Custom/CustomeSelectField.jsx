import { Grid } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import { Controller } from "react-hook-form";

const FormSelect = ({
  name,
  label,
  control,
  children,
  onChange,
  defaultValue,
  value,
  ...props
}) => {
  const labelId = `${name}-label`;
  return (
    <Grid item xs={12} sm={6}>
      <FormControl {...props}>
        <InputLabel id={labelId}>{label}</InputLabel>
        <Controller
          render={({ field }) => (
            <Select
              labelId={labelId}
              label={label}
              {...field}
            >
              {children}
            </Select>
          )}
          name={name}
          control={control}
          defaultValue={defaultValue}
         
        />
      </FormControl>
    </Grid>
  );
};
export default FormSelect;
