import { Document, Model, model, Types, Schema, Query } from "mongoose"

// clever way of doing it found here:
// https://medium.com/@agentwhs/complete-guide-for-typescript-for-mongoose-for-node-js-8cc0a7e470c1

const UserSchema = new Schema<UserDocument, UserModel>({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

export interface User {
  name: string;
  email: string;
  password: string;
  phone: string;
  location: string
  date?: Date
}

export interface UserBaseDocument extends User, Document{
}

export interface UserDocument extends UserBaseDocument {
  //add fields that may be populated later
}

export interface UserModel extends Model<UserDocument> {
  extendedFunction(x: number): number
}

UserSchema.statics.extendedFunction = function(
  this: Model<UserDocument>,
  x: number
) {
  // I could use "this" to populate extended fields late
  return x+1;
}

export default model<UserDocument, UserModel>("User", UserSchema);
