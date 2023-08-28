import mongoose from "mongoose";
const MONGO_URL = process.env.MONGO_URI;
if (!MONGO_URL) {
  throw new Error("Please define MONGO_URI");
}

let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { con: null, promise: null };
}
const dbConnect = async () => {
  if (cached.conn) {
    return cached.con;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };
    cached.promise = mongoose.connect(MONGO_URL, opts).then((mongoose) => {
      return mongoose;
    });
  }
  try {
    cached.con = await cached.promise;
  } catch (error) {
    cached.promise = null;
    throw error;
  }
  return cached.conn;
};
export default dbConnect;
