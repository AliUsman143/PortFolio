"use client";

import { useState } from "react";
import Swal from "sweetalert2";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

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

const page = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "6188881b-88e7-4909-958d-04480a416db4");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      setLoading(false);

      if (res.success) {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Your message has been successfully sent.",
          confirmButtonColor: "#3085d6",
        });

        event.target.reset(); // Reset the form after successful submission
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops!",
          text: "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to send message. Please check your connection.",
      });
    }
  };

  return (
    <div>
     <div className="container mx-auto md:py-0 py-20">
  <div className="grid lg:grid-cols-2 grid-cols-1 items-center justify-center">
    <div className="max-w-[560px] md:order-1 order-2 w-full mx-auto">
      <div className="bg-[#27272c] p-5 sm:p-7">
        <p className="text-accent font-semibold capitalize tracking-widest mb-3">
          Let's work together
        </p>
        <p className="text-white/60 text-sm">
          If you want to contact me, please fill out the form.
        </p>

        <form
          onSubmit={onSubmit}
          className="space-y-4 max-w-lg mx-auto p-4 border border-[#27272c] rounded-lg shadow-md bg-[#27272c]"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="First Name"
              className="w-full p-2 border rounded text-black placeholder-gray-500"
              required
            />
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              className="w-full p-2 border rounded text-black placeholder-gray-500"
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-2 border rounded text-black placeholder-gray-500"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            className="w-full p-2 border rounded text-black placeholder-gray-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>

    <div className="md:order-2 order-1 flex justify-center md:justify-start">
      <div className="md:py-32 py-6">
        <ul>
          {info.map((item, index) => (
            <li key={index} className="flex items-center mb-2 gap-10">
              <div>
                <div className="border cursor-pointer border-none text-accent bg-white/5 h-12 w-12 p-3">
                  {item.icons}
                </div>
              </div>
              <div>
                <p className="text-[12px] text-gray-600">{item.title}</p>
                <p className="text-[15px]">{item.Description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default page;
