import React from "react";
import { MdEmail } from "react-icons/md";
import { MdVoiceChat } from "react-icons/md";
import { IoMdChatboxes } from "react-icons/io";
const Contactcard = () => {
  return (
    <>
      <h1 className="text-center font-bold text-2xl mt-3 mb-4">Contact Us</h1>
      <div className="container mx-auto flex mb-5">
        <div className="flex flex-col items-center shadow-2xl p-6 w-80 mx-3">
          <MdEmail className="mb-2 text-2xl text-red-600" />
          <h2 className="font-bold">Email</h2>
          <p className="text-gray-600">Monday to Friday Expected</p>
          <p className="text-gray-600">response time: 72 hours</p>
          <p className="text-gray-700 text-sm mt-2">Send Email - &gt;</p>
        </div>
        <div className="flex flex-col items-center shadow-2xl p-6 w-80 mx-3">
          <MdVoiceChat className="mb-2 text-2xl text-red-600" />
          <h2 className="font-bold">Live Chat</h2>
          <p className="text-gray-600">Weekdays: 9 AM -- 6 PM ET </p>
          <p className="text-gray-600">Weekends: 9 AM -- 5 PM ET</p>
          <p className="text-gray-700 text-sm mt-2">Chat Now - &gt;</p>
        </div>
        <div className="flex flex-col items-center shadow-2xl p-6 w-80 mx-3">
          <IoMdChatboxes className="mb-2 text-2xl text-red-600" />
          <h2 className="font-bold">Community Forum</h2>
          <p className="text-gray-600">Monday to Friday Expected</p>
          <p className="text-gray-600">response time: 72 hours</p>
          <p className="text-gray-700 text-sm mt-2">Ask the Community - &gt;</p>
        </div>
      </div>
    </>
  );
};

export default Contactcard;
