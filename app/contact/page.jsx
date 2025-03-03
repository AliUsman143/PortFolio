"use client";
import { useState } from "react";
import Swal from "sweetalert2";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import Link from "next/link";
const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+92) 305-1023906",
    path: "https://wa.me/9203051023906",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "aliusmanijaz143@gmail.com",
    path: "/contact",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Faisal Town, Chak Jhumra, Faisalabad",
    path: "https://www.google.com/maps/place/Chak+Jhumra,+Faisalabad,+Pakistan/@31.5678,73.1234,15z", // Google Maps Exact Location
  },
];

const ContactPage = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "6188881b-88e7-4909-958d-04480a416db4");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      }).then((res) => res.json());

      setLoading(false);

      Swal.fire({
        icon: res.success ? "success" : "error",
        title: res.success ? "Message Sent!" : "Oops!",
        text: res.success
          ? "Your message has been successfully sent."
          : "Something went wrong. Please try again.",
      });

      if (res.success) event.target.reset(); // Reset form only on success
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
    <div className="container mx-auto ">
      <div className="grid lg:grid-cols-2 grid-cols-1 items-center">
        {/* Contact Form */}
        <div className="max-w-[560px] mx-auto bg-[#27272c] p-6 rounded-lg shadow-md">
          <h2 className="text-accent font-semibold uppercase tracking-wide mb-3">
            Let's work together
          </h2>
          <p className="text-white/60 text-sm mb-6">
            Fill out the form to get in touch.
          </p>

          <form onSubmit={onSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="First Name"
                className="w-full p-2 border rounded bg-white/5 text-white placeholder-gray-400"
                required
              />
              <input
                type="text"
                name="lastname"
                placeholder="Last Name"
                className="w-full p-2 border rounded bg-white/5 text-white placeholder-gray-400"
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-2 border rounded bg-white/5 text-white placeholder-gray-400"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              className="w-full p-2 border rounded bg-white/5 text-white placeholder-gray-400"
              required
            />
            <button
              type="submit"
              className="w-full bg-accent hover:bg-accent-dark text-white py-2 rounded transition"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="flex justify-center md:justify-start pl-7 md:py-32 py-6">
          <ul>
            {info.map((item, index) => (
              <li key={index} className="flex items-center mb-4 gap-6">
                {/* Clickable Icon */}
                <div className="border cursor-pointer text-accent bg-white/5 h-12 w-12 flex items-center justify-center rounded-full">
                  {item.path.startsWith("/") ? (
                    <Link href={item.path}>{item.icon}</Link> // Internal Next.js Routing
                  ) : (
                    <a
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.icon}
                    </a> // External Links
                  )}
                </div>

                {/* Title & Description */}
                <div>
                  <p className="text-gray-500 text-sm">{item.title}</p>
                  <p className="text-white">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
