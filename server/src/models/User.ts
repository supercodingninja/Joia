import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  password: String,
});

const User = mongoose.model("User", UserSchema);
export default User;