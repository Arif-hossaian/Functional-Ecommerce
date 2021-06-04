import { Grid, TextField } from "@material-ui/core";
import React from "react";
import { useFormContext, Controller } from "react-hook-form";

const FormInput = ({ name, label, required }) => {
  const { control } = useFormContext();
  const isError = false;
  return (
    <Grid item xs={12} sm={6}>
      <Controller
        control={control}
        defaultValue=""
        name={name}
        error={isError}
        render={({ field }) => (
          <TextField {...field} fullWidth label={label} required={required} />
        )}
      />
    </Grid>
  );
};

export default FormInput;
