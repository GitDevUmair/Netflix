"use server";
import Contact from "@/model/contact";
import dbConnect from "@/Utils/dbConn";
//import { NextResponse } from "next/server";
export const submitContact = async (data) => {
  try {
    await dbConnect();
    await Contact.create(data);
    return {
      status: "OK",
      message: "Your response has been recorded!",
    };
  } catch (error) {
    return {
      status: "ERROR",
      message: "Server error, please try again!",
    };
  }
};
