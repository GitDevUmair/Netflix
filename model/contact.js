import mongoose from "mongoose";
const { Schema } = mongoose;

const contactSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Contact ||
  mongoose.model("Contact", contactSchema);
