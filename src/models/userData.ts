import { Schema, model } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
export interface IUser {
    id: string
    hasStreamUpListener: boolean
}

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>({
    id: { type: String, required: true },
    hasStreamUpListener: { type: Boolean, required: true }
});

// 3. Create a Model.
const User = model<IUser>('User', userSchema);


export default User