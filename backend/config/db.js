import mongoose from "mongoose";
import process from "process";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb://elbabelawthaq_db_user:6uwgSDBLU4Buhqfm@ac-cofc1wg-shard-00-00.tvoi2ks.mongodb.net:27017,ac-cofc1wg-shard-00-01.tvoi2ks.mongodb.net:27017,ac-cofc1wg-shard-00-02.tvoi2ks.mongodb.net:27017/myDatabase?ssl=true&replicaSet=atlas-49yp87-shard-0&authSource=admin&retryWrites=true&w=majority&appName=elbab-elawthaq"
    );

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;