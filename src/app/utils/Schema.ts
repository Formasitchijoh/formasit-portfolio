import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  item: String,
  completed: Boolean,
});

export const Todo = mongoose.models.Todo || mongoose.model("Todo", TodoSchema);
