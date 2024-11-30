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
          <div className="max-w-[560px] md:order-1 order-2 w-full">
            <div className="bg-[#27272c] p-5 sm:p-7">
              <p className="text-accent font-semibold capitalize tracking-widest mb-3">
                let's work together
              </p>
              <p className="text-white/60 text-sm">
                If you want to contact me, please fill out the form.
              </p>

              <div className="mt-5 max-w-full mx-auto">
                <div className="flex flex-wrap gap-4 sm:gap-5 justify-between">
                  {/* First Name */}
                  <Input
                    type="firstname"
                    placeholder="Firstname"
                    className="w-full sm:w-[48%]"
                  />

                  {/* Last Name */}
                  <Input
                    type="Lastname"
                    placeholder="Lastname"
                    className="w-full sm:w-[48%]"
                  />

                  {/* Email */}
                  <Input
                    type="Email"
                    placeholder="Email"
                    className="w-full sm:w-[48%]"
                  />

                  {/* Phone Number */}
                  <Input
                    type="Phone Number"
                    placeholder="Phone No"
                    className="w-full sm:w-[48%]"
                  />

                  {/* Autocomplete */}
                  <Autocomplete
                    id="courses-select-demo"
                    sx={{ width: "100%" }}
                    options={courses}
                    autoHighlight
                    getOptionLabel={(option) => option.label}
                    renderOption={(props, option) => (
                      <Box
                        {...props}
                        className="text-white/60 w-full font-light px-2 py-1 bg-primary hover:bg-gray-800 rounded-md"
                      >
                        {option.label}
                      </Box>
                    )}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder="Choose a course"
                        slotProps={{
                          htmlInput: {
                            ...params.inputProps,
                            autoComplete: "new-password",
                          },
                        }}
                        InputProps={{
                          ...params.InputProps,
                          className:
                            "flex h-[45px] w-full text-white/60 text-sm rounded-md border border-white/10 focus:border-accent font-light px-4 bg-primary placeholder:text-white/60 outline-none",
                        }}
                      />
                    )}
                  />

                  {/* Textarea */}
                  <TextareaAutosize
                    minRows={5}
                    className="w-full text-white/60 text-sm rounded-md border border-white/10 focus:border-accent font-light px-4 bg-primary placeholder:text-white/60 outline-none"
                  />

                  {/* Submit Button */}
                  <Button
                    text="Send message"
                    className="w-full sm:w-auto rounded-3xl border-accent bg-accent text-primary text-sm py-2 px-6 tracking-tighter"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="md:order-2 order-1">
            <div className="md:py-32 py-6 ">
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
