"use client";
import React, { useState } from "react";
import Swal from "sweetalert2";
import {
  Container,
  Grid,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  Button,
  Typography,
  Paper,
  Autocomplete,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm, Controller, FormProvider } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  addmissionField,
  selectStateData,
} from "components/store/slices/addmissionForm"; //../store/slices/addmissionForm
import { format } from "date-fns";
import parsePhoneNumberFromString from "libphonenumber-js";

const PaperStyled = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
}));

const ContainerStyled = styled(Container)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  height: "100vh",
}));

const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  tel: Yup.string().test(
    "is-valid-phone",
    "Phone number is not valid",
    (value) => {
      if (!value) return false;
      const phoneNumber = parsePhoneNumberFromString(value);
      return phoneNumber && phoneNumber.isValid();
    }
  ),
  admissionDate: Yup.date().typeError(
    "The date of admission must be a valid date"
  ),
  course: Yup.object().nullable().required("Course selection is required"),
  gender: Yup.string().required("Gender is required"),
  checkbox: Yup.boolean().oneOf([true], "You must agree to the terms"),
});

const Admissionform = () => {
  const { formData } = useSelector(selectStateData);

  console.log("check the format of date", formData.admissionDate);
  const dispatch = useDispatch();

  const methods = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: formData,
  });

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = methods;

  const [courses, setCourses] = useState([
    { title: "Computer Science" },
    { title: "Mechanical Engineering" },
    { title: "Electrical Engineering" },
    { title: "Civil Engineering" },
    { title: "Mathematics" },
    { title: "Physics" },
  ]);

  const onSubmit = (data) => {
    try {
      // Convert admissionDate to the desired format before dispatching
      if (data.admissionDate) {
        data.admissionDate = format(new Date(data.admissionDate), "MM/dd/yyyy");
      }
      dispatch(addmissionField(data));
      Swal.fire({
        icon: "success",
        title: "Submission Successful",
        text: "Your data has been submitted successfully!",
        confirmButtonText: "Ok",
      }).then(() => {
        reset();
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: "There was an error submitting your data. Please try again.",
        confirmButtonText: "Ok",
      });
    }
  };

  const onError = (errors) => {
    const errorMessages = Object.values(errors).map(({ message }) => message);
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: errorMessages[0],
      confirmButtonText: "OK",
    });
  };

  return (
    <FormProvider {...methods}>
      <ContainerStyled>
        <Grid container spacing={3} style={{ width: "100%" }}>
          {/* Form Section */}
          <Grid
            item
            xs={12}
            md={6}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <PaperStyled
              elevation={3}
              style={{ width: "100%", maxWidth: "500px" }}
            >
              <Typography variant="h4" gutterBottom align="center">
                Addmission Form
              </Typography>
              <form
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit(onSubmit, onError)}
              >
                <Grid container spacing={2}>
                  {/* First Name */}
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="First Name"
                      variant="outlined"
                      {...register("firstName")}
                      error={!!errors.firstName}
                      helperText={errors.firstName?.message}
                    />
                  </Grid>

                  {/* Last Name */}
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Last Name"
                      variant="outlined"
                      {...register("lastName")}
                      error={!!errors.lastName}
                      helperText={errors.lastName?.message}
                    />
                  </Grid>

                  {/* Email */}
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      variant="outlined"
                      type="email"
                      {...register("email")}
                      error={!!errors.email}
                      helperText={errors.email?.message}
                    />
                  </Grid>

                  {/* Phone Number */}
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      variant="outlined"
                      type="tel"
                      {...register("tel")}
                      error={!!errors.tel}
                      helperText={errors.tel?.message}
                    />
                  </Grid>

                  {/* Date of Admission */}
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Date of Admission"
                      variant="outlined"
                      type="date"
                      InputLabelProps={{ shrink: true }}
                      {...register("admissionDate")}
                      error={!!errors.admissionDate}
                      helperText={errors.admissionDate?.message}
                    />
                  </Grid>

                  {/* Course Selection */}
                  <Grid item xs={12}>
                    <Controller
                      name="course"
                      control={control}
                      render={({ field }) => (
                        <Autocomplete
                          {...field}
                          options={courses}
                          getOptionLabel={(option) => option.title}
                          isOptionEqualToValue={(option, value) =>
                            option.title === value?.title
                          }
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label="Select Course"
                              variant="outlined"
                              error={!!errors.course}
                              helperText={errors.course?.message}
                            />
                          )}
                          onChange={(_, value) => field.onChange(value)}
                        />
                      )}
                    />
                  </Grid>

                  {/* Gender */}
                  <Grid item xs={12}>
                    <FormControl component="fieldset" error={!!errors.gender}>
                      <FormLabel component="legend">Gender</FormLabel>
                      <RadioGroup row>
                        <FormControlLabel
                          value="male"
                          control={<Radio {...register("gender")} />}
                          label="Male"
                        />
                        <FormControlLabel
                          value="female"
                          control={<Radio {...register("gender")} />}
                          label="Female"
                        />
                        <FormControlLabel
                          value="other"
                          control={<Radio {...register("gender")} />}
                          label="Other"
                        />
                      </RadioGroup>
                      {errors.gender && (
                        <Typography color={"red"}>
                          {errors.gender.message}
                        </Typography>
                      )}
                    </FormControl>
                  </Grid>

                  {/* Terms and Conditions */}
                  <Grid item xs={12}>
                    <FormControl error={!!errors.checkbox}>
                      <FormControlLabel
                        control={<Checkbox {...register("checkbox")} />}
                        label="I agree to all terms and conditions"
                      />
                      {errors.checkbox && (
                        <Typography color={"red"}>
                          {errors.checkbox.message}
                        </Typography>
                      )}
                    </FormControl>
                  </Grid>

                  {/* Submit Button */}
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      type="submit"
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </PaperStyled>
          </Grid>

          {/* Image Section */}
         
        </Grid>
      </ContainerStyled>
    </FormProvider>
  );
};

export default Admissionform;








// const info = [
//   {
//     icons: "",
//     title: "Phone",
//     Description: "(+92) 305-1023906",
//   },
//   {
//     icons: "",
//     title: "Email",
//     Description: "aliusmanijaz143@gmail.com",
//   },
//   {
//     icons: "",
//     title: "Address",
//     Description: "Faisal Town, Chak Jhumra, Faisalabad",
//   },
// ];