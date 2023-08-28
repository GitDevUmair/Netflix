"use client";
import { useState } from "react";
import { submitContact } from "../app/Contact/action";
const Contacform = () => {
  const [status, setStatus] = useState({ value: null });
  const handleSubmit = async (formData) => {
    try {
      const response = await submitContact({
        username: formData.get("username"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        message: formData.get("message"),
      });
      console.log(response);
      if (response.status === "OK") {
        setStatus({ value: "success" });
      } else {
        setStatus({ value: "error" });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mt-2 flex flex-col items-center">
      <h1 className="font-bold text-xl mb-2 ">
        {" "}
        We&apos;d Love to hear <span className="text-red-600"> from you </span>
      </h1>
      <div className="border border-gray-300 p-4 ">
        <form action={handleSubmit}>
          <label htmlFor="username" className="text-sm font-semibold">
            Enter Your Name
          </label>{" "}
          <br />
          <input
            type="text"
            placeholder="Enter Your Name"
            name="username"
            id="username"
            className="border-gray-300 mb-2 rounded-lg px-4 py-2 border focus:outline-none focus:border-red-600"
          />
          <br />
          <label htmlFor="email" className="text-sm font-semibold">
            Email
          </label>{" "}
          <br />
          <input
            type="email"
            placeholder="Enter Your Email"
            name="email"
            id="email"
            className="border-gray-300 mb-2 rounded-lg px-4 py-2 border focus:outline-none focus:border-red-600"
          />
          <br />
          <label htmlFor="phone" className="text-sm font-semibold">
            Phone Number
          </label>{" "}
          <br />
          <input
            type="phone"
            placeholder="Enter Your Phone"
            name="phone"
            id="phone"
            className="border-gray-300 mb-2 rounded-lg px-4 py-2 border focus:outline-none focus:border-red-600"
          />
          <br />
          <label htmlFor="message" className="text-sm font-semibold">
            Message
          </label>{" "}
          <br />
          <textarea
            name="message"
            id="message"
            cols="23"
            rows="4"
            className="border-gray-300 border px-4 py-2 focus:outline-none focus:border-red-600 rounded-lg"
          ></textarea>
          <br />
          <button
            type="submit"
            className="bg-black text-white my-1 px-2 py-2 rounded-2xl text-sm font-semibold hover:text-white hover:bg-red-700"
          >
            Send Message
          </button>{" "}
        </form>
        {status.value === "success" && (
          <p className="text-green-800 font-bold mt-2">
            Your response has been recorded!
          </p>
        )}
        {!status.value === "success" && (
          <p className="text-red-800 font-bold mt-2">
            Failed to receive your response!
          </p>
        )}
      </div>
    </div>
  );
};

export default Contacform;
