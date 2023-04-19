import mongoose from "mongoose";
const { Schema } = mongoose;

const newSchema = new Schema({
  name: String,
  lastName: String,
});

newSchema.set('toJSON' , {
  transform: (document , returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

export default mongoose.model('CollectionObject', newSchema);