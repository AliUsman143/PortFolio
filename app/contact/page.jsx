"use client";

import { TextareaAutosize } from "@mui/material";
import Button from "../components/ui/button";
import { Input } from "../components/ui/input";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import Autocomplete from "@mui/material/Autocomplete";
const info = [
  {
    icons: <FaPhoneAlt />,
    title: "Phone",
    Description: "(+92) 305-1023906",
  },
  {
    icons: <FaEnvelope />,
    title: "Email",
    Description: "aliusmanijaz143@gmail.com",
  },
  {
    icons: <FaMapMarkedAlt />,
    title: "Address",
    Description: "Faisal Town, Chak Jhumra, Faisalabad",
  },
];
const courses = [
  { label: "Web Development" },
  { label: "Data Science" },
  { label: "Graphic Design" },
  { label: "Machine Learning" },
  { label: "Cybersecurity" },
];


const page = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="w-[560px] md:order-1 order-2">
            <div className="bg-[#27272c] p-7">
              <p className="text-accent font-semibold capitalize tracking-widest mb-3">
                let's work together
              </p>
              <p className="text-white/60 text-sm">
                If you to contact with me. please fill the form.
              </p>

              <div className="mt-5 ">
                <div className="flex gap-5 flex-wrap justify-between">
                  <Input
                    type="firstname"
                    placeholder="Firstname"
                    className="max-w-[17vw] "
                  />
                  <Input
                    type="firstname"
                    placeholder="Lasstname"
                    className="max-w-[17vw] "
                  />
                  <Input
                    type="firstname"
                    placeholder="Email"
                    className="max-w-[17vw] "
                  />
                  <Input
                    type="firstname"
                    placeholder="Phone No"
                    className="max-w-[17vw] "
                  />
                  {/* autocomplete  */}

                  <Autocomplete
                    id="courses-select-demo"
                    sx={{ width: "100%" }} // Makes the component responsive
                    options={courses}
                    autoHighlight
                    getOptionLabel={(option) => option.label}
                    renderOption={(props, option) => {
                      const { key, ...optionProps } = props;
                      return (
                        <Box
                          key={key}
                          component="li"
                          className="text-white/60 w-full font-light px-2 py-1 bg-primary hover:bg-gray-800 rounded-md"
                          {...optionProps}
                        >
                          {option.label}
                        </Box>
                      );
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder="Choose a course"
                        slotProps={{
                          htmlInput: {
                            ...params.inputProps,
                            autoComplete: "new-password", // disable autocomplete and autofill
                          },
                        }}
                        InputProps={{
                          ...params.InputProps,
                          className:
                            "flex h-[45px] w-full text-white/60 text-sm rounded-md border border-white/10 focus:border-accent font-light px-4 bg-primary placeholder:text-white/60 placeholder:flex placeholder:items-center placeholder:py-1 outline-none",
                        }}
                      />
                    )}
                  />

                  <TextareaAutosize
                    minRows={5}
                    className="flex h-[45px] w-full text-white/60 text-sm rounded-md border border-white/10 focus:border-accent font-light px-4 bg-primary placeholder:text-white/60 placeholder:flex placeholder:items-center placeholder:py-1 outline-none"
                  />

                  <Button
                    text={"Send message"}
                    className="  rounded-3xl border-accent bg-accent text-primary text-sm py-2  tracking-tighter"
                  />
                </div>
              </div>
              {/* <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                className="border border-white/10 focus:border-accent font-light bg-primary text-base placeholder:text-white/60 outline-none"
              /> */}
            </div>
          </div>
          <div className="md:order-2 order-1">
            <div className="py-32 ">
              <ul>
                {info.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center mb-2 gap-10">
                      <div>
                        <div className="border cursor-pointer  border-none text-accent bg-white/5 h-12 w-12 p-3">
                          {item.icons}
                        </div>
                      </div>
                      <div>
                        <p className="text-[12px] text-gray-600 ">
                          {item.title}
                        </p>
                        <p className="text-[15px]">{item.Description}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

// import React, { useState } from "react";
// import Swal from "sweetalert2";
// import {
//   Container,
//   Grid,
//   TextField,
//   FormControl,
//   FormLabel,
//   RadioGroup,
//   FormControlLabel,
//   Radio,
//   Checkbox,
//   Button,
//   Typography,
//   Paper,
//   Autocomplete,
// } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import Image from "next/image";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as Yup from "yup";
// import { useForm, Controller, FormProvider } from "react-hook-form";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   addmissionField,
//   selectStateData,
// } from "components/store/slices/addmissionForm"; //../store/slices/addmissionForm
// import { format } from "date-fns";
// import parsePhoneNumberFromString from "libphonenumber-js";

// const PaperStyled = styled(Paper)(({ theme }) => ({
//   padding: theme.spacing(3),
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "center",
//   alignItems: "center",
//   height: "100%",
// }));

// const ContainerStyled = styled(Container)(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   height: "100vh",
// }));

// const validationSchema = Yup.object({
//   firstName: Yup.string().required("First Name is required"),
//   lastName: Yup.string().required("Last Name is required"),
//   email: Yup.string()
//     .email("Invalid email address")
//     .required("Email is required"),
//   tel: Yup.string().test(
//     "is-valid-phone",
//     "Phone number is not valid",
//     (value) => {
//       if (!value) return false;
//       const phoneNumber = parsePhoneNumberFromString(value);
//       return phoneNumber && phoneNumber.isValid();
//     }
//   ),
//   admissionDate: Yup.date().typeError(
//     "The date of admission must be a valid date"
//   ),
//   course: Yup.object().nullable().required("Course selection is required"),
//   gender: Yup.string().required("Gender is required"),
//   checkbox: Yup.boolean().oneOf([true], "You must agree to the terms"),
// });

// const Admissionform = () => {
//   const { formData } = useSelector(selectStateData);

//   console.log("check the format of date", formData.admissionDate);
//   const dispatch = useDispatch();

//   const methods = useForm({
//     resolver: yupResolver(validationSchema),
//     defaultValues: formData,
//   });

//   const {
//     register,
//     handleSubmit,
//     control,
//     reset,
//     formState: { errors },
//   } = methods;

//   const [courses, setCourses] = useState([
//     { title: "Computer Science" },
//     { title: "Mechanical Engineering" },
//     { title: "Electrical Engineering" },
//     { title: "Civil Engineering" },
//     { title: "Mathematics" },
//     { title: "Physics" },
//   ]);

//   const onSubmit = (data) => {
//     try {
//       // Convert admissionDate to the desired format before dispatching
//       if (data.admissionDate) {
//         data.admissionDate = format(new Date(data.admissionDate), "MM/dd/yyyy");
//       }
//       dispatch(addmissionField(data));
//       Swal.fire({
//         icon: "success",
//         title: "Submission Successful",
//         text: "Your data has been submitted successfully!",
//         confirmButtonText: "Ok",
//       }).then(() => {
//         reset();
//       });
//     } catch (error) {
//       Swal.fire({
//         icon: "error",
//         title: "Submission Failed",
//         text: "There was an error submitting your data. Please try again.",
//         confirmButtonText: "Ok",
//       });
//     }
//   };

//   const onError = (errors) => {
//     const errorMessages = Object.values(errors).map(({ message }) => message);
//     Swal.fire({
//       icon: "error",

//       title: "Oops...",
//       text: errorMessages[0],
//       confirmButtonText: "OK",
//     });
//   };

//   return (
//     <FormProvider {...methods}>
//       <ContainerStyled>
//         <Grid container spacing={3} style={{ width: "100%" }}>
//           {/* Form Section */}
//           <Grid
//             item
//             xs={12}
//             md={6}
//             style={{ display: "flex", justifyContent: "center" }}
//           >
//             <PaperStyled
//               elevation={3}
//               style={{ width: "100%", maxWidth: "500px" }}
//             >
//               <Typography variant="h4" gutterBottom align="center">
//                 Addmission Form
//               </Typography>
//               <form
//                 noValidate
//                 autoComplete="off"
//                 onSubmit={handleSubmit(onSubmit, onError)}
//               >
//                 <Grid container spacing={2}>
//                   {/* First Name */}
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       fullWidth
//                       label="First Name"
//                       variant="outlined"
//                       {...register("firstName")}
//                       error={!!errors.firstName}
//                       helperText={errors.firstName?.message}
//                     />
//                   </Grid>

//                   {/* Last Name */}
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       fullWidth
//                       label="Last Name"
//                       variant="outlined"
//                       {...register("lastName")}
//                       error={!!errors.lastName}
//                       helperText={errors.lastName?.message}
//                     />
//                   </Grid>

//                   {/* Email */}
//                   <Grid item xs={12}>
//                     <TextField
//                       fullWidth
//                       label="Email"
//                       variant="outlined"
//                       type="email"
//                       {...register("email")}
//                       error={!!errors.email}
//                       helperText={errors.email?.message}
//                     />
//                   </Grid>

//                   {/* Phone Number */}
//                   <Grid item xs={12}>
//                     <TextField
//                       fullWidth
//                       label="Phone Number"
//                       variant="outlined"
//                       type="tel"
//                       {...register("tel")}
//                       error={!!errors.tel}
//                       helperText={errors.tel?.message}
//                     />
//                   </Grid>

//                   {/* Date of Admission */}
//                   <Grid item xs={12}>
//                     <TextField
//                       fullWidth
//                       label="Date of Admission"
//                       variant="outlined"
//                       type="date"
//                       InputLabelProps={{ shrink: true }}
//                       {...register("admissionDate")}
//                       error={!!errors.admissionDate}
//                       helperText={errors.admissionDate?.message}
//                     />
//                   </Grid>

//                   {/* Course Selection */}
//                   <Grid item xs={12}>
//                     <Controller
//                       name="course"
//                       control={control}
//                       render={({ field }) => (
//                         <Autocomplete
//                           {...field}
//                           options={courses}
//                           getOptionLabel={(option) => option.title}
//                           isOptionEqualToValue={(option, value) =>
//                             option.title === value?.title
//                           }
//                           renderInput={(params) => (
//                             <TextField
//                               {...params}
//                               label="Select Course"
//                               variant="outlined"
//                               error={!!errors.course}
//                               helperText={errors.course?.message}
//                             />
//                           )}
//                           onChange={(_, value) => field.onChange(value)}
//                         />
//                       )}
//                     />
//                   </Grid>

//                   {/* Gender */}
//                   <Grid item xs={12}>
//                     <FormControl component="fieldset" error={!!errors.gender}>
//                       <FormLabel component="legend">Gender</FormLabel>
//                       <RadioGroup row>
//                         <FormControlLabel
//                           value="male"
//                           control={<Radio {...register("gender")} />}
//                           label="Male"
//                         />
//                         <FormControlLabel
//                           value="female"
//                           control={<Radio {...register("gender")} />}
//                           label="Female"
//                         />
//                         <FormControlLabel
//                           value="other"
//                           control={<Radio {...register("gender")} />}
//                           label="Other"
//                         />
//                       </RadioGroup>
//                       {errors.gender && (
//                         <Typography color={"red"}>
//                           {errors.gender.message}
//                         </Typography>
//                       )}
//                     </FormControl>
//                   </Grid>

//                   {/* Terms and Conditions */}
//                   <Grid item xs={12}>
//                     <FormControl error={!!errors.checkbox}>
//                       <FormControlLabel
//                         control={<Checkbox {...register("checkbox")} />}
//                         label="I agree to all terms and conditions"
//                       />
//                       {errors.checkbox && (
//                         <Typography color={"red"}>
//                           {errors.checkbox.message}
//                         </Typography>
//                       )}
//                     </FormControl>
//                   </Grid>

//                   {/* Submit Button */}
//                   <Grid item xs={12}>
//                     <Button
//                       variant="contained"
//                       color="primary"
//                       fullWidth
//                       type="submit"
//                     >
//                       Submit
//                     </Button>
//                   </Grid>
//                 </Grid>
//               </form>
//             </PaperStyled>
//           </Grid>

//           {/* Image Section */}

//         </Grid>
//       </ContainerStyled>
//     </FormProvider>
//   );
// };

// export default Admissionform;
