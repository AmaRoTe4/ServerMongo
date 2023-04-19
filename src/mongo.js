import mongoose from "mongoose";

const uri =
  "mongodb+srv://Amaro:River2003@cluster0.jpzwyhq.mongodb.net/Users?retryWrites=true&w=majority";

export const connection = () => {
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Conectado..."))
    .catch(error => console.error(error));
};

export const close = () => {
    mongoose.connection.close()
    .then(() => console.log("Cerradon..."))
    .error((error) => console.error(error));
};